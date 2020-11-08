module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: ["./resources/js/components/*.vue"],
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
