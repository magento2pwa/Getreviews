const moduleOverridePlugin = require('../moduleOverrideWebpackPlugin');
const { Targetables } = require('@magento/pwa-buildpack');
const componentOverrideFooter = module.exports={
    ['@magento/venia-ui/lib/components/Footer']:'src/components/Footer'
};

module.exports = targets => {
    targets.of("@magento/venia-ui").routes.tap(routes => {
        routes.push({
            name: "HelloworldCustomRouter",
            pattern: "/helloworlds",
            path: require.resolve("../components/Helloworld/helloworld.js")
        });
        return routes;
    });
    targets.of("@magento/venia-ui").routes.tap(routes => {
        routes.push({
            name: "MyCustomCmsBlock",
            pattern: "/customcmsblock",
            path: require.resolve("../components/CustomCmsBlock/customCmsBlock.js")
        });
        return routes;

});
    targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => {
        new moduleOverridePlugin(componentOverrideFooter).apply(compiler);
    });

    const targetables = Targetables.using(targets);
    const ProductDetails = targetables.reactComponent(
        '@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js'
    );
    const Productreview = ProductDetails.addImport(
        "Reviews from 'src/components/reviews/review.js'"
    );
    ProductDetails
        .insertAfterJSX('<Form />', `<${Productreview} />`)
        .setJSXProps('Reviews', {
            'classes': '{classes}',
            'productDetails': '{productDetails}',
        });

};
