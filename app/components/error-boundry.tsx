import { useRouteError } from "@remix-run/react"

type Props = {
  renderError?: (error: unknown) => React.ReactNode
}

export const CommonErrorBoundary = ({ renderError }: Props) => {
  const error = useRouteError()

  // Capture error and send to Sentry if needed

  return (
    <>
      {renderError ? (
        renderError(error)
      ) : (
        <div className="p-4">
          Something went wrong. Please try refreshing page
        </div>
      )}
    </>
  )
}
