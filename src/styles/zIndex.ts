const createZIndexRegistry = <T extends readonly string[]>(layers: T) =>
    layers.reduce(
        (registry, layer: T[number], index) => ({
            ...registry,
            [layer]: index + 1,
        }),
        {} as Record<T[number], number>
    )

const zIndex = createZIndexRegistry(['header'] as const)

export default zIndex
