import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/Tooltip'
import { ReactNode } from 'react'

interface TooltipableProp {
  tips?: string | string[]
  children: ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'center' | 'start' | 'end'
  delay?: number
}

export function Tooltipable({ tips, children, align = 'center', side = 'top', delay }: TooltipableProp) {
  return (
    <Tooltip delayDuration={delay}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      {tips && (
        <TooltipContent className="text-wrap border-none bg-primary text-white" align={align} side={side}>
          {typeof tips === 'string'
            ? tips
            : tips.map((tip) => (
                <>
                  {tip}
                  <br />
                </>
              ))}
        </TooltipContent>
      )}
    </Tooltip>
  )
}
