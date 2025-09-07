"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import { cn } from "@/lib/utils"

interface SheetProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const Sheet: React.FC<SheetProps> = ({
  children,
  open: openProp,
  onOpenChange: onOpenChangeProp,
  ...props
}) => (
  <DrawerPrimitive.Root
    open={openProp}
    onOpenChange={onOpenChangeProp}
    {...props}
  >
    {children}
  </DrawerPrimitive.Root>
)

Sheet.displayName = "Sheet"

const SheetTrigger = DrawerPrimitive.Trigger

const SheetPortal = DrawerPrimitive.Portal

const SheetClose = DrawerPrimitive.Close

interface SheetContentProps {
  side?: "top" | "bottom" | "left" | "right"
  className?: string
  children: React.ReactNode
}

const SheetContent: React.FC<SheetContentProps> = ({
  side = "right",
  className,
  children,
  ...props
}) => (
  <SheetPortal>
    <DrawerPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80" />
    <DrawerPrimitive.Content
      className={cn(
        "fixed inset-y-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        side === "left" && "left-0 h-full w-3/4 border-r sm:max-w-sm",
        side === "right" && "right-0 h-full w-3/4 border-l sm:max-w-sm",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </SheetPortal>
)

SheetContent.displayName = "SheetContent"

const SheetHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)

SheetHeader.displayName = "SheetHeader"

const SheetFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)

SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))

SheetTitle.displayName = DrawerPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))

SheetDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}