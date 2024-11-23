import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import clsx from "clsx"


export default function AppWithProviders() {
  return (
      <App />
  )
}

export function App() {
  return (
    <html lang="en" className={clsx("h-full")}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
          <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
