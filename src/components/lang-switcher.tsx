"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { useLocalization, type LocaleOption } from "@/providers/localization-provider";
import { toggleLocalization } from "@/actions";

export function LangSwitcher() {
  const { locale, setLocale, localized } = useLocalization();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <ToggleGroup
          type="single"
          className="rounded-full bg-ds-neutral-50 p-1"
          value={locale}
          onValueChange={(l: LocaleOption | "") => {
            if (!l || l === locale) return;
            setLocale(l);
            toggleLocalization(l);
          }}
        >
          <ToggleGroupItem
            type="button"
            name="locale"
            value="pt-BR"
            className={`size-9 rounded-full transition-opacity ${
              locale !== "pt-BR" ? "opacity-50" : ""
            }`}
          >
            <Avatar className="size-7">
              <AvatarImage fetchPriority="high" src="/br.png" />
              <AvatarFallback>PT</AvatarFallback>
            </Avatar>
          </ToggleGroupItem>

          <ToggleGroupItem
            type="button"
            name="locale"
            value="en-US"
            className={`size-9 rounded-full transition-opacity ${
              locale !== "en-US" ? "opacity-50" : ""
            }`}
          >
            <Avatar className="size-7">
              <AvatarImage fetchPriority="high" src="/en.png" />
              <AvatarFallback>EN</AvatarFallback>
            </Avatar>
          </ToggleGroupItem>

          <TooltipContent>
            <p>{localized['select-your-language']}</p>
          </TooltipContent>
        </ToggleGroup>
      </TooltipTrigger>
    </Tooltip>
  );
}
