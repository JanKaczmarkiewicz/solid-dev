export const composeClassNames = (...args: (string | undefined)[]) =>
    args.filter(Boolean).join(' ')
