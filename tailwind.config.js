module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: ["./resources/**/*.vue"],
    theme: {
        extend: {
            colors: {
                sample: "#eee",
            },
        },
    },
    variants: {},
    plugins: [],
};
