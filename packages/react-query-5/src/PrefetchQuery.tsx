import { type DefaultError, type FetchQueryOptions, type QueryKey, usePrefetchQuery } from '@tanstack/react-query'

/**
 * A component that allows you to use usePrefetchQuery in JSX, avoiding the limitations of React hooks.
 * @see {@link https://suspensive.org/docs/react-query/PrefetchQuery Suspensive Docs}
 * @example
 * ```tsx
 * <PrefetchQuery queryKey={['queryKey']} queryFn={queryFn} />
 * ```
 */
export function PrefetchQuery<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(options: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>) {
  usePrefetchQuery(options)
  return <></>
}
