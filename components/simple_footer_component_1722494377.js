/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722494377", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10 bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
                <hr id="footer-divider" class="my-6 border-purple-300 sm:mx-auto lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-bold text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-3 sm:h-10 filter drop-shadow-lg" alt="Landwind Logo" />
                            EthTracker - Ethereum Transaction Analytics
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-white font-medium">
                        Stay ahead of the curve with real-time monitoring and analysis of new Ethereum transactions. EthTracker provides detailed insights to help you make informed decisions in the dynamic world of blockchain.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
