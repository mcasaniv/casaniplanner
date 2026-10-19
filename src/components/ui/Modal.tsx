import * as React from "react"
import { cn } from "../../lib/utils"
import { X } from "lucide-react"
import { Button } from "./Button"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  className?: string
  maxWidth?: string
}

export function Modal({ isOpen, onClose, title, children, className, maxWidth = "max-w-md" }: ModalProps) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div 
        className={cn(
          "w-full flex flex-col rounded-t-2xl sm:rounded-2xl bg-white dark:bg-slate-900 dark:text-slate-50 shadow-2xl border-t sm:border border-slate-200/80 dark:border-slate-800 overflow-hidden animate-in fade-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200 max-h-[92vh] sm:max-h-[85vh]",
          maxWidth,
          className
        )}
      >
        <div className="flex-shrink-0 flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="sm:hidden w-8 h-1 rounded-full bg-slate-300 dark:bg-slate-700 mx-auto absolute top-2 left-1/2 -translate-x-1/2" />
            <h2 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">{title}</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 rounded-full text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 overscroll-contain">{children}</div>
      </div>
    </div>
  )
}

