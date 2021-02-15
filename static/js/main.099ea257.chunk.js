(this["webpackJsonpreact-table-example"]=this["webpackJsonpreact-table-example"]||[]).push([[0],{56:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),l=n(38),i=n.n(l),o=(n(56),n(105)),s=n(48),u=n(39),d=n(40),j=n.n(d),b=n(106),g=n(6),p=n(49),f=n(27),h=n(24),O=n(41),x=n(42),v=n(14),m=n(44),F=n(101),w=n(104),y=n(107),C=n(102),R=n(103),P=n(3),S=m.a.div(r||(r=Object(O.a)(["\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n\n  table {\n    border-spacing: 0;\n    border: 1px solid black;\n\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n\n      :last-child {\n        border-right: 0;\n      }\n    }\n  }\n"])));function T(e){var t=e.preGlobalFilteredRows,n=e.globalFilter,r=e.setGlobalFilter,a=t.length,l=c.a.useState(n),i=Object(h.a)(l,2),o=i[0],s=i[1],u=Object(v.useAsyncDebounce)((function(e){r(e||void 0)}),200);return Object(P.jsxs)("span",{children:["Search:"," ",Object(P.jsx)("input",{value:o||"",onChange:function(e){s(e.target.value),u(e.target.value)},placeholder:"".concat(a," records..."),style:{fontSize:"1.1rem",border:"0"}})]})}function k(e){var t=e.column,n=t.filterValue,r=t.preFilteredRows,a=t.setFilter,c=r.length;return Object(P.jsx)("input",{value:n||"",onChange:function(e){a(e.target.value||void 0)},placeholder:"Search ".concat(c," records...")})}function M(e){var t=e.column,n=t.filterValue,r=t.setFilter,a=t.preFilteredRows,l=t.id,i=c.a.useMemo((function(){var e=new Set;return a.forEach((function(t){e.add(t.values[l])})),Object(f.a)(e.values())}),[l,a]);return Object(P.jsxs)("select",{value:n,onChange:function(e){r(e.target.value||void 0)},children:[Object(P.jsx)("option",{value:"",children:"All"}),i.map((function(e,t){return Object(P.jsx)("option",{value:e,children:e},t)}))]})}function H(e){var t=e.column,n=t.filterValue,r=t.setFilter,a=t.preFilteredRows,l=t.id,i=c.a.useMemo((function(){var e=a.length?a[0].values[l]:0,t=a.length?a[0].values[l]:0;return a.forEach((function(n){e=Math.min(n.values[l],e),t=Math.max(n.values[l],t)})),[e,t]}),[l,a]),o=Object(h.a)(i,2),s=o[0],u=o[1];return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("input",{type:"range",min:s,max:u,value:n||s,onChange:function(e){r(parseInt(e.target.value,10))}}),Object(P.jsx)("button",{onClick:function(){return r(void 0)},children:"Off"})]})}function E(e){var t=e.column,n=t.filterValue,r=void 0===n?[]:n,a=t.preFilteredRows,l=t.setFilter,i=t.id,o=c.a.useMemo((function(){var e=a.length?a[0].values[i]:0,t=a.length?a[0].values[i]:0;return a.forEach((function(n){e=Math.min(n.values[i],e),t=Math.max(n.values[i],t)})),[e,t]}),[i,a]),s=Object(h.a)(o,2),u=s[0],d=s[1];return Object(P.jsxs)("div",{style:{display:"flex"},children:[Object(P.jsx)("input",{value:r[0]||"",type:"number",onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t?parseInt(t,10):void 0,e[1]]}))},placeholder:"Min (".concat(u,")"),style:{width:"70px",marginRight:"0.5rem"}}),"to",Object(P.jsx)("input",{value:r[1]||"",type:"number",onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t?parseInt(t,10):void 0]}))},placeholder:"Max (".concat(d,")"),style:{width:"70px",marginLeft:"0.5rem"}})]})}function I(e,t,n){return Object(x.a)(e,n,{keys:[function(e){return e.values[t]}]})}I.autoRemove=function(e){return!e};var G=c.a.forwardRef((function(e,t){var n=e.indeterminate,r=Object(p.a)(e,["indeterminate"]),a=c.a.useRef(),l=t||a;return c.a.useEffect((function(){l.current.indeterminate=n}),[l,n]),Object(P.jsx)(P.Fragment,{children:Object(P.jsx)("input",Object(g.a)({type:"checkbox",ref:l},r))})})),z=function(e){var t=e.data,n=Object(a.useMemo)((function(){return t}),[t]),r=Object(a.useMemo)((function(){return[{id:"expander",Header:function(e){var t=e.getToggleAllRowsExpandedProps,n=e.isAllRowsExpanded;return Object(P.jsx)("span",Object(g.a)(Object(g.a)({},t()),{},{children:n?"\ud83d\udc47":"\ud83d\udc49"}))},Cell:function(e){var t=e.row;return t.canExpand?Object(P.jsx)("span",Object(g.a)(Object(g.a)({},t.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*t.depth,"rem")}})),{},{children:t.isExpanded?"\ud83d\udc47":"\ud83d\udc49"})):null}},{Header:"Id",accessor:"id"},{Header:"\u0418\u043c\u044f",accessor:"first_name",filter:"fuzzyText"},{Header:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",accessor:"last_name",filter:"fuzzyText"},{Header:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",accessor:"age",Filter:H,filter:"equals"},{Header:"\u0412\u0438\u0437\u0438\u0442\u044b",accessor:"visits",Filter:E,filter:"between"},{Header:"\u041f\u043e\u0447\u0442\u0430",accessor:"email"},{Header:"\u041f\u043e\u043b",accessor:"gender",Filter:M,filter:"includes"}]}),[]),l=c.a.useMemo((function(){return{fuzzyText:I,text:function(e,t,n){return e.filter((function(e){var r=e.values[t];return void 0===r||String(r).toLowerCase().startsWith(String(n).toLowerCase())}))}}}),[]),i=c.a.useMemo((function(){return{Filter:k}}),[]),o=Object(v.useTable)({columns:r,data:n,defaultColumn:i,filterTypes:l},v.useFilters,v.useGlobalFilter,v.useSortBy,v.useExpanded,v.usePagination,v.useRowSelect,(function(e){e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllPageRowsSelectedProps;return Object(P.jsx)("div",{children:Object(P.jsx)(G,Object(g.a)({},t()))})},Cell:function(e){var t=e.row;return Object(P.jsx)("div",{children:Object(P.jsx)(G,Object(g.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(f.a)(e))}))})),s=o.getTableProps,u=o.getTableBodyProps,d=o.headerGroups,j=o.prepareRow,b=o.state,p=o.visibleColumns,h=o.preGlobalFilteredRows,O=o.setGlobalFilter,x=o.page,m=o.canPreviousPage,z=o.canNextPage,B=o.pageOptions,A=o.pageCount,L=o.gotoPage,N=o.nextPage,V=o.previousPage,D=o.setPageSize,J=o.selectedFlatRows;return console.log("\ud83d\ude80 ~ file: ReactTable.tsx ~ line 376 ~ state",b),Object(P.jsxs)(S,{children:[Object(P.jsxs)("div",{children:["\u0412\u044b\u0431\u0440\u0430\u043d\u043e: ",null===J||void 0===J?void 0:J.length]}),Object(P.jsxs)("div",{className:"pagination",style:{marginBottom:"16px"},children:[Object(P.jsx)("button",{onClick:function(){return L(0)},disabled:!m,children:"<<"})," ",Object(P.jsx)("button",{onClick:function(){return V()},disabled:!m,children:"<"})," ",Object(P.jsx)("button",{onClick:function(){return N()},disabled:!z,children:">"})," ",Object(P.jsx)("button",{onClick:function(){return L(A-1)},disabled:!z,children:">>"})," ",Object(P.jsxs)("span",{children:["Page"," ",Object(P.jsxs)("strong",{children:[b.pageIndex+1," of ",B.length]})," "]}),Object(P.jsxs)("span",{children:["| Go to page:"," ",Object(P.jsx)("input",{type:"number",defaultValue:b.pageIndex+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;L(t)},style:{width:"100px"}})]})," ",Object(P.jsx)("select",{value:b.pageSize,onChange:function(e){D(Number(e.target.value))},children:[10,30,50].map((function(e){return Object(P.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(P.jsxs)(F.a,Object(g.a)(Object(g.a)({},s()),{},{children:[Object(P.jsxs)(C.a,{children:[d.map((function(e){return Object(P.jsx)(R.a,Object(g.a)(Object(g.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(y.a,Object(g.a)(Object(g.a)({},e.getHeaderProps()),{},{children:[Object(P.jsxs)("div",Object(g.a)(Object(g.a)({},e.getSortByToggleProps()),{},{children:[e.render("Header"),e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""]})),Object(P.jsx)("div",{children:e.canFilter?e.render("Filter"):null})]}))})}))}))})),Object(P.jsx)(R.a,{children:Object(P.jsx)(y.a,{colSpan:p.length,style:{textAlign:"left"},children:Object(P.jsx)(T,{preGlobalFilteredRows:h,globalFilter:b.globalFilter,setGlobalFilter:O})})})]}),Object(P.jsx)(w.a,Object(g.a)(Object(g.a)({},u()),{},{children:x.map((function(e){return j(e),Object(P.jsx)(R.a,Object(g.a)(Object(g.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(P.jsx)(y.a,Object(g.a)(Object(g.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),Object(P.jsx)("pre",{children:Object(P.jsx)("code",{children:JSON.stringify({expanded:b.expanded,filters:b.filters,search:b.globalFilter,sortBy:b.sortBy,selectedRowIds:b.selectedRowIds})})})]})},B=function(){var e=Object(b.a)("fetchAllPeople",(function(){return j()("https://my.api.mockaroo.com/checking_expand.json?key=b89539e0")}),{retry:!1,refetchOnWindowFocus:!1}),t=e.isLoading,n=e.error,r=e.data;return console.log("\ud83d\ude80 ~ file: ReactTableContainer.tsx ~ line 13 ~ ReactTableContainer ~ data",r),Object(P.jsxs)("div",{children:[n&&Object(P.jsx)("div",{children:"\u0428\u043e\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a ..."}),t?Object(P.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u0445 ..."}):Object(P.jsx)(z,{data:r.data})]})},A=new o.a;var L=function(){return Object(P.jsxs)(s.a,{client:A,children:[Object(P.jsx)(B,{}),Object(P.jsx)(u.ReactQueryDevtools,{initialIsOpen:!1})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),r(e),a(e),c(e),l(e)}))};i.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(L,{})}),document.getElementById("root")),N()}},[[83,1,2]]]);
//# sourceMappingURL=main.099ea257.chunk.js.map