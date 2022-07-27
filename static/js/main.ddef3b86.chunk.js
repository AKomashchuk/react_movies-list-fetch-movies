(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(6),s=c.n(i),a=(c(12),c(7)),n=c(2),r=c(1),l=(c(13),c(14),c(15),c(0)),d=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:null===t||void 0===t?void 0:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:null===t||void 0===t?void 0:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[null===t||void 0===t?void 0:t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:null===t||void 0===t?void 0:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(d,{movie:e},e.imdbId)}))})};c(17);var j=function(e){var t=e.setQuery,c=e.query,i=e.addMovie,s=Object(r.useState)(null),a=Object(n.a)(s,2),o=a[0],j=a[1],m=Object(r.useState)(!1),b=Object(n.a)(m,2),u=b[0],v=b[1],h=Object(r.useState)(!1),O=Object(n.a)(h,2),x=O[0],f=O[1],p=Object(r.useState)(!1),g=Object(n.a)(p,2),N=g[0],y=g[1],w=x?"Search again":"Find a movie";return Object(r.useEffect)((function(){v(!1)}),[c]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),y(!0),function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=d049b4a","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(c).then((function(e){"False"===e.Response&&(v(!0),y(!1)),"True"===e.Response&&(j({title:e.Title,description:e.Plot,imgUrl:"N/A"===e.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":e.Poster,imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID),imdbId:e.imdbID}),f(!0),v(!1),y(!1))}))},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:c,onChange:function(e){return t(e.target.value)}})}),u&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:"button is-light ".concat(N?"is-loading":""),disabled:!c,children:w})}),x&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){o&&(i(o),v(!1),f(!1),t(""))},children:"Add to the list"})})]})]}),x&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(d,{movie:o})]})]})},m=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1],s=Object(r.useState)(""),d=Object(n.a)(s,2),m=d[0],b=d[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(j,{setQuery:b,query:m,addMovie:function(e){c.filter((function(t){return t.imdbId!==e.imdbId})).length===c.length&&i((function(t){return[].concat(Object(a.a)(t),[e])}))}})})]})};s.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.ddef3b86.chunk.js.map