# tiny-app-test

Used to test a few tiny app frameworks to help vet the final size of the bundles with each tools. 

## Format
- Each app is a simple landing page and an about page. 
- Each app uses tailwind with purgecss to create small css bundles
- Each app has a nav-header, footer, and a sign-up form on the landing page. 

## Libraries present
Below are the libraries being tested here. 

### Lit-Element + pwa-helpers
Lit is a web-components framework built by the Polymer Team. Since it's not a full app framework, need the pwa-helpers libraries to add in routing and stage management. 

### StencilJS
Stencil is a web-components framework built by the Ionic Team. It uses typescript and very Angular-like approach to things, including generators.

### preact
A lightweight implementation of React V-Dom, which is 3kb gzipped. This puts it at a similar size to the above 2 libraries. Note: need preact-router (~2kb gzipped) to handle routing. 

