import { FC, PropsWithChildren } from "react"

import { AppSidebar } from "./sidebar"

type Props = PropsWithChildren<{}>

export const RootLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <div className="w-full flex-grow-0 overflow-auto">{children}</div>
    </div>
  )
}
