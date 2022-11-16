const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-f240b262.js","imports":["_app/immutable/start-f240b262.js","_app/immutable/chunks/index-a88e3314.js","_app/immutable/chunks/singletons-3ea218b8.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-26faadfe.js'),
			() => import('./chunks/1-dc14c2a5.js'),
			() => import('./chunks/2-eaea61e3.js'),
			() => import('./chunks/3-40bd5451.js'),
			() => import('./chunks/4-6e5d9360.js'),
			() => import('./chunks/5-09234d82.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "grafana",
				pattern: /^\/grafana\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "prometheus",
				pattern: /^\/prometheus\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "instance/[slug]",
				pattern: /^\/instance\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
