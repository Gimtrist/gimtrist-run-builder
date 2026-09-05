import { StrictMode, useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import { create } from "zustand";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/store/ui.ts
var packageManagers = [
	"pnpm",
	"npm",
	"yarn",
	"bun"
];
/**
* The only cross-cutting UI state on the site. Anything a single component owns stays in
* `useState`; this store exists because the drawer, the tab strip and the copy toast are each
* read or written by more than one component and by the deep-link parser.
*/
var useUiStore = create((set) => ({
	codeTab: "typescript",
	mobileNavOpen: false,
	openMenu: void 0,
	packageManager: "pnpm",
	toast: void 0,
	closeMobileNav: () => set({
		mobileNavOpen: false,
		openMenu: void 0
	}),
	copy: async (text, label) => {
		try {
			await navigator.clipboard.writeText(text);
			set({ toast: `${label} copied` });
		} catch {
			set({ toast: `Could not copy ${label} — select it and copy manually` });
		}
	},
	dismissToast: () => set({ toast: void 0 }),
	setCodeTab: (codeTab) => set({ codeTab }),
	setOpenMenu: (openMenu) => set({ openMenu }),
	setPackageManager: (packageManager) => set({ packageManager }),
	toggleMobileNav: () => set((state) => ({
		mobileNavOpen: !state.mobileNavOpen,
		openMenu: void 0
	}))
}));
//#endregion
//#region src/components/ui/Icon.tsx
var PATHS = {
	arrowRight: "M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5",
	bolt: "M13.5 2.5 4.5 13.8h6.2l-1.2 7.7 9-11.3h-6.2z",
	chevronDown: "m6 9.5 6 5.5 6-5.5",
	close: "m6 6 12 12M18 6 6 18",
	copy: "M9 9V5.6c0-.6.5-1.1 1.1-1.1h8.3c.6 0 1.1.5 1.1 1.1v8.3c0 .6-.5 1.1-1.1 1.1H15M5.6 9h8.3c.6 0 1.1.5 1.1 1.1v8.3c0 .6-.5 1.1-1.1 1.1H5.6a1.1 1.1 0 0 1-1.1-1.1v-8.3c0-.6.5-1.1 1.1-1.1Z",
	cube: "M12 2.6 21 7.6v9l-9 5-9-5v-9zM12 12.6 21 7.6M12 12.6 3 7.6M12 12.6v9",
	devices: "M3 5.5h12.5v9H3zM6.5 18.5h6M9.5 14.5v4M18 8.5h3.2v10H18z",
	external: "M14 4.5h5.5V10M19.5 4.5 11 13M17 14v4.4c0 .6-.5 1.1-1.1 1.1H5.6a1.1 1.1 0 0 1-1.1-1.1V8.1c0-.6.5-1.1 1.1-1.1H10",
	hexagon: "M12 2.6 21 7.6v9l-9 5-9-5v-9zM12 2.6v19M3 7.6l18 9M21 7.6l-18 9",
	menu: "M4 7h16M4 12h16M4 17h16",
	puzzle: "M10.2 3.5h3.6v2a1.7 1.7 0 1 0 3.4 0v-2h3.3v3.4h-2a1.7 1.7 0 1 0 0 3.4h2v3.4h-3.3v-2a1.7 1.7 0 1 0-3.4 0v2h-3.6v-3.3h-2a1.7 1.7 0 1 1 0-3.4h2z",
	search: "M11 4.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM20 20l-4.4-4.4",
	terminal: "M5 7.5 9.5 12 5 16.5M12.5 16.5H19"
};
/** One stroked SVG set, sized by the caller. Every mark in the reference is a 24-unit outline. */
function Icon({ name, className, strokeWidth = 1.6 }) {
	return /* @__PURE__ */ jsx("svg", {
		"aria-hidden": "true",
		className,
		fill: "none",
		focusable: "false",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth,
		viewBox: "0 0 24 24",
		children: /* @__PURE__ */ jsx("path", { d: PATHS[name] })
	});
}
//#endregion
//#region src/components/code/CopyButton.tsx
function CopyButton({ className, label, text }) {
	const copy = useUiStore((state) => state.copy);
	return /* @__PURE__ */ jsx("button", {
		"aria-label": `Copy ${label}`,
		className: ["rounded-md p-1.5 text-tn-fg-subtle transition-colors hover:bg-white/5 hover:text-tn-fg", className].filter(Boolean).join(" "),
		"data-testid": "copy-button",
		onClick: () => void copy(text, label),
		type: "button",
		children: /* @__PURE__ */ jsx(Icon, {
			className: "h-[18px] w-[18px]",
			name: "copy"
		})
	});
}
/** The confirmation the copy button raises. Mounted once, beside the route body. */
function CopyToast() {
	const toast = useUiStore((state) => state.toast);
	const dismiss = useUiStore((state) => state.dismissToast);
	useEffect(() => {
		if (toast === void 0) return void 0;
		const timer = setTimeout(dismiss, 2400);
		return () => clearTimeout(timer);
	}, [toast, dismiss]);
	if (toast === void 0) return null;
	return /* @__PURE__ */ jsx("output", {
		"aria-live": "polite",
		className: "fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-tn-border bg-tn-surface-2 px-4 py-2.5 text-[14px] text-tn-fg shadow-2xl shadow-black/60",
		"data-testid": "copy-toast",
		children: toast
	});
}
//#endregion
//#region src/routes.ts
var routes = [{
	path: "/",
	label: "Home",
	title: "ThreeNative — build native 3D apps with the Three.js API",
	description: "ThreeNative lets you write familiar Three.js code and ship high-performance experiences across web, desktop, and mobile — without WebView overhead.",
	ogImage: "/og/home.svg",
	indexable: true
}, {
	path: "/404",
	label: "Page not found",
	title: "Page not found — ThreeNative",
	description: "That page is not part of the ThreeNative site. Start from the home page instead.",
	ogImage: "/og/home.svg",
	indexable: false
}];
//#endregion
//#region src/content/nav.ts
var REPOSITORY = "https://github.com/ThreeNativeHQ/threenative";
/** The centre nav from the reference, in the reference's order. */
var primaryNav = [
	{
		label: "Product",
		target: {
			kind: "pending",
			reason: "The product overview page is not written yet."
		},
		items: [
			{
				label: "Engine",
				summary: "The framework, its packages, and the conventions they ship on by default.",
				target: {
					kind: "external",
					href: `${REPOSITORY}#readme`
				}
			},
			{
				label: "Templates",
				summary: "Eight scaffolds that produce a running game, a HUD, and a playtest scenario.",
				target: {
					kind: "external",
					href: `${REPOSITORY}/blob/main/packages/create-threenative/README.md`
				}
			},
			{
				label: "Native runtime",
				summary: "The owned C++ host for desktop, Android and iOS. No WebView.",
				target: {
					kind: "external",
					href: `${REPOSITORY}/tree/main/packages/runtime-native`
				}
			},
			{
				label: "Playtest",
				summary: "Drive the real build and assert what happened, on four platforms.",
				target: {
					kind: "external",
					href: `${REPOSITORY}/tree/main/packages/playtest`
				}
			}
		]
	},
	{
		label: "Solutions",
		target: {
			kind: "pending",
			reason: "Nothing is written here yet, and an empty page is worse than an honest one."
		}
	},
	{
		label: "Docs",
		target: {
			kind: "external",
			href: `${REPOSITORY}/tree/main/docs`
		}
	},
	{
		label: "Community",
		target: {
			kind: "pending",
			reason: "Pick a destination from the menu."
		},
		items: [
			{
				label: "Discussions",
				summary: "Ask a question or show what you built.",
				target: {
					kind: "external",
					href: `${REPOSITORY}/discussions`
				}
			},
			{
				label: "Issues",
				summary: "Report a bug against a version and a platform.",
				target: {
					kind: "external",
					href: `${REPOSITORY}/issues`
				}
			},
			{
				label: "Contributing",
				summary: "How a change gets reviewed, and the gates it has to pass.",
				target: {
					kind: "external",
					href: `${REPOSITORY}/blob/main/CONTRIBUTING.md`
				}
			}
		]
	},
	{
		label: "Pricing",
		target: {
			kind: "pending",
			reason: "ThreeNative is MIT-licensed. There is nothing to price."
		}
	}
];
/** The right-hand cluster. The reference shows a magnifier, an account link and the accent CTA. */
var utilityNav = [
	{
		label: "Search the source",
		target: {
			kind: "external",
			href: "https://github.com/search?q=repo%3AThreeNativeHQ%2Fthreenative&type=code"
		}
	},
	{
		label: "GitHub",
		target: {
			kind: "external",
			href: REPOSITORY
		}
	},
	{
		label: "Get Started",
		target: {
			kind: "anchor",
			hash: "#install"
		}
	}
];
var footerNav = [{
	label: "Start",
	target: {
		kind: "anchor",
		hash: "#install"
	},
	items: [
		{
			label: "Install",
			summary: "One command, one running game.",
			target: {
				kind: "anchor",
				hash: "#install"
			}
		},
		{
			label: "Code sample",
			summary: "The portable entry point, compiled against the shipped package.",
			target: {
				kind: "anchor",
				hash: "#code"
			}
		},
		{
			label: "Capabilities",
			summary: "Every public export, searchable by situation.",
			target: {
				kind: "external",
				href: `${REPOSITORY}/blob/main/packages/create-threenative/capabilities.json`
			}
		}
	]
}, ...primaryNav];
function navHref(target) {
	if (target.kind === "anchor") return target.hash;
	if (target.kind === "external") return target.href;
	if (target.kind === "internal") return target.path;
}
//#endregion
//#region src/components/layout/MobileNav.tsx
function entryHref(entry) {
	return navHref(entry.target);
}
/**
* Mounted beside the header, never inside it: the header's `backdrop-blur` makes it a containing
* block for `position: fixed` descendants, which collapsed the drawer to the header's own 68px and
* left it invisible on every phone. The Playwright drawer test is what caught that.
*
* It is a native `<dialog>` opened with `showModal()`, so the focus trap and the Escape key are the
* browser's rather than a hand-rolled key handler's. The drawer reads the same nav model the
* desktop header does: one model, three renderers.
*/
function MobileNav() {
	const open = useUiStore((state) => state.mobileNavOpen);
	const close = useUiStore((state) => state.closeMobileNav);
	const panel = useRef(null);
	useEffect(() => {
		const node = panel.current;
		if (!open || node === null) return void 0;
		if (!node.open) node.showModal();
		node.addEventListener("close", close);
		return () => node.removeEventListener("close", close);
	}, [open, close]);
	if (!open) return null;
	return /* @__PURE__ */ jsxs("dialog", {
		"aria-label": "Navigation",
		className: "fixed inset-0 top-[68px] z-50 m-0 h-full max-h-none w-full max-w-none bg-tn-bg text-tn-fg backdrop:bg-black/60 lg:hidden",
		"data-testid": "mobile-nav",
		ref: panel,
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-end border-b border-tn-border px-5 py-3",
			children: /* @__PURE__ */ jsx("button", {
				"aria-label": "Close the navigation menu",
				onClick: close,
				type: "button",
				children: /* @__PURE__ */ jsx(Icon, {
					className: "h-6 w-6 text-tn-fg",
					name: "close"
				})
			})
		}), /* @__PURE__ */ jsx("nav", {
			className: "overflow-y-auto px-5 py-6",
			children: /* @__PURE__ */ jsx("ul", {
				className: "flex flex-col gap-1",
				children: [...primaryNav, ...utilityNav].map((entry) => {
					const href = entryHref(entry);
					return /* @__PURE__ */ jsxs("li", { children: [href === void 0 ? /* @__PURE__ */ jsx("span", {
						"aria-disabled": "true",
						className: "block py-3 text-[17px] text-tn-fg-subtle",
						title: entry.target.kind === "pending" ? entry.target.reason : void 0,
						children: entry.label
					}) : /* @__PURE__ */ jsx("a", {
						className: "block py-3 text-[17px] text-tn-fg",
						href,
						onClick: close,
						children: entry.label
					}), entry.items === void 0 ? null : /* @__PURE__ */ jsx("ul", {
						className: "mb-2 flex flex-col gap-1 border-l border-tn-border pl-4",
						children: entry.items.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							className: "block py-2 text-[15px] text-tn-fg-muted",
							href: navHref(item.target),
							onClick: close,
							children: item.label
						}) }, item.label))
					})] }, entry.label);
				})
			})
		})]
	});
}
//#endregion
//#region src/components/layout/SiteFooter.tsx
/** Reads the same nav model as the header, so a destination cannot exist in one and not the other. */
function SiteFooter() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-tn-border",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-[1536px] px-5 py-14 lg:px-[68px]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid gap-10 md:grid-cols-[minmax(0,1.2fr)_repeat(2,minmax(0,1fr))] lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ jsx(Icon, {
						className: "h-7 w-7 text-tn-accent",
						name: "cube",
						strokeWidth: 1.5
					}), /* @__PURE__ */ jsx("span", {
						className: "text-[19px] font-semibold tracking-[-0.02em]",
						children: "ThreeNative"
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 max-w-[320px] text-[14px] leading-relaxed text-tn-fg-subtle",
					children: "MIT licensed, in the open, on GitHub"
				})] }), footerNav.filter((entry) => entry.items !== void 0 && entry.items.length > 0).map((entry) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-[13px] font-semibold uppercase tracking-[0.12em] text-tn-fg-subtle",
					children: entry.label
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-4 flex flex-col gap-3",
					children: (entry.items ?? []).map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						className: "text-[14px] text-tn-fg-muted transition-colors hover:text-tn-fg",
						href: navHref(item.target),
						rel: item.target.kind === "external" ? "noreferrer" : void 0,
						target: item.target.kind === "external" ? "_blank" : void 0,
						children: item.label
					}) }, item.label))
				})] }, entry.label))]
			})
		})
	});
}
//#endregion
//#region src/components/ui/Button.tsx
var BASE = "inline-flex items-center justify-center gap-2 rounded-lg text-[15px] font-semibold leading-none transition-colors";
var VARIANTS = {
	accent: "bg-tn-accent text-tn-accent-ink hover:bg-tn-accent/90",
	ghost: "text-tn-fg-muted hover:text-tn-fg",
	outline: "border border-tn-border text-tn-fg hover:border-tn-fg-subtle hover:bg-white/5"
};
var SIZES = {
	md: "h-[46px] px-6",
	sm: "h-[38px] px-4"
};
function classes(variant, size, extra) {
	return [
		BASE,
		VARIANTS[variant],
		SIZES[size],
		extra
	].filter(Boolean).join(" ");
}
function ButtonLink({ children, className, size = "md", variant = "accent", ...rest }) {
	return /* @__PURE__ */ jsx("a", {
		className: classes(variant, size, className),
		...rest,
		children
	});
}
function Button({ children, className, size = "md", variant = "accent", ...rest }) {
	return /* @__PURE__ */ jsx("button", {
		className: classes(variant, size, className),
		type: "button",
		...rest,
		children
	});
}
//#endregion
//#region src/components/layout/NavDropdown.tsx
/**
* A nav entry that opens a menu. Every item inside points somewhere real; the trigger itself is
* a `pending` target, which is why it is a button and never a link.
*/
function NavDropdown({ entry }) {
	const openMenu = useUiStore((state) => state.openMenu);
	const setOpenMenu = useUiStore((state) => state.setOpenMenu);
	const container = useRef(null);
	const open = openMenu === entry.label;
	useEffect(() => {
		if (!open) return void 0;
		const onKeyDown = (event) => {
			if (event.key === "Escape") setOpenMenu(void 0);
		};
		const onPointerDown = (event) => {
			if (!container.current?.contains(event.target)) setOpenMenu(void 0);
		};
		document.addEventListener("keydown", onKeyDown);
		document.addEventListener("mousedown", onPointerDown);
		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.removeEventListener("mousedown", onPointerDown);
		};
	}, [open, setOpenMenu]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		ref: container,
		children: [/* @__PURE__ */ jsxs("button", {
			"aria-expanded": open,
			"aria-haspopup": "true",
			className: "flex items-center gap-1.5 rounded-md px-3 py-2 text-[15px] text-tn-fg/90 transition-colors hover:text-tn-fg",
			onClick: () => setOpenMenu(open ? void 0 : entry.label),
			type: "button",
			children: [entry.label, /* @__PURE__ */ jsx(Icon, {
				className: `h-3.5 w-3.5 text-tn-fg-subtle transition-transform ${open ? "rotate-180" : ""}`,
				name: "chevronDown"
			})]
		}), open ? /* @__PURE__ */ jsx("div", {
			className: "absolute left-0 top-full z-50 mt-2 w-[320px] rounded-xl border border-tn-border bg-tn-surface p-2 shadow-2xl shadow-black/60",
			children: /* @__PURE__ */ jsx("ul", { children: (entry.items ?? []).map((item) => {
				const href = navHref(item.target);
				return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
					className: "flex flex-col gap-1 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5",
					href,
					onClick: () => setOpenMenu(void 0),
					rel: item.target.kind === "external" ? "noreferrer" : void 0,
					target: item.target.kind === "external" ? "_blank" : void 0,
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[14px] font-semibold text-tn-fg",
						children: item.label
					}), /* @__PURE__ */ jsx("span", {
						className: "text-[13px] leading-snug text-tn-fg-subtle",
						children: item.summary
					})]
				}) }, item.label);
			}) })
		}) : null]
	});
}
//#endregion
//#region src/components/layout/SiteHeader.tsx
function PendingEntry({ entry }) {
	const reason = entry.target.kind === "pending" ? entry.target.reason : "";
	return /* @__PURE__ */ jsx("span", {
		"aria-disabled": "true",
		className: "cursor-default rounded-md px-3 py-2 text-[15px] text-tn-fg-subtle",
		title: reason,
		children: entry.label
	});
}
function PrimaryEntry({ entry }) {
	if (entry.items !== void 0 && entry.items.length > 0) return /* @__PURE__ */ jsx(NavDropdown, { entry });
	const href = navHref(entry.target);
	if (href === void 0) return /* @__PURE__ */ jsx(PendingEntry, { entry });
	return /* @__PURE__ */ jsx("a", {
		className: "rounded-md px-3 py-2 text-[15px] text-tn-fg/90 transition-colors hover:text-tn-fg",
		href,
		rel: entry.target.kind === "external" ? "noreferrer" : void 0,
		target: entry.target.kind === "external" ? "_blank" : void 0,
		children: entry.label
	});
}
/** Logo, centre nav, utility cluster — the top strip of `REFERENCE.png`. */
function SiteHeader() {
	const toggleMobileNav = useUiStore((state) => state.toggleMobileNav);
	const [search, source, cta] = utilityNav;
	return /* @__PURE__ */ jsx("header", {
		className: "sticky top-0 z-40 border-b border-tn-border/80 bg-tn-bg/95 backdrop-blur",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-[68px] w-full max-w-[1600px] items-center px-5 lg:px-6",
			children: [
				/* @__PURE__ */ jsxs("a", {
					className: "flex shrink-0 items-center gap-2.5",
					href: "/",
					children: [/* @__PURE__ */ jsx(Icon, {
						className: "h-[30px] w-[30px] text-tn-accent",
						name: "cube",
						strokeWidth: 1.5
					}), /* @__PURE__ */ jsx("span", {
						className: "text-[21px] font-semibold tracking-[-0.02em] text-tn-fg",
						children: "ThreeNative"
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					"aria-label": "Main",
					className: "ml-10 hidden items-center gap-1 lg:flex",
					children: primaryNav.map((entry) => /* @__PURE__ */ jsx(PrimaryEntry, { entry }, entry.label))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "ml-auto hidden items-center gap-5 lg:flex",
					children: [
						search === void 0 ? null : /* @__PURE__ */ jsx("a", {
							"aria-label": search.label,
							className: "text-tn-fg-muted transition-colors hover:text-tn-fg",
							href: navHref(search.target),
							rel: "noreferrer",
							target: "_blank",
							title: search.label,
							children: /* @__PURE__ */ jsx(Icon, {
								className: "h-[21px] w-[21px]",
								name: "search"
							})
						}),
						source === void 0 ? null : /* @__PURE__ */ jsx("a", {
							className: "text-[15px] text-tn-fg transition-colors hover:text-tn-fg-muted",
							href: navHref(source.target),
							rel: "noreferrer",
							target: "_blank",
							children: source.label
						}),
						cta === void 0 ? null : /* @__PURE__ */ jsx(ButtonLink, {
							href: navHref(cta.target),
							size: "sm",
							variant: "accent",
							children: cta.label
						})
					]
				}),
				/* @__PURE__ */ jsx("button", {
					"aria-label": "Open the navigation menu",
					className: "ml-auto text-tn-fg lg:hidden",
					"data-testid": "mobile-nav-toggle",
					onClick: toggleMobileNav,
					type: "button",
					children: /* @__PURE__ */ jsx(Icon, {
						className: "h-6 w-6",
						name: "menu"
					})
				})
			]
		})
	});
}
//#endregion
//#region src/lib/snippets.ts
/**
* The panel renders these bytes and nothing else. Each one is a real file inside the typechecked
* project, so `pnpm --filter threenative-site typecheck` compiles the homepage's code sample
* against the shipped packages and the site breaks the build when the API moves.
*/
var snippets = [
	{
		tab: "typescript",
		label: "TypeScript",
		language: "typescript",
		path: "site/src/content/snippets/hero-typescript.ts",
		source: "import { type ICtx, Scene, defineGame } from \"@threenative/core\";\nimport { BoxGeometry, Mesh, MeshStandardMaterial } from \"three\";\n\nclass Play extends Scene {\n  override enter(ctx: ICtx) {\n    const material = new MeshStandardMaterial();\n    const cube = ctx.add(new Mesh(new BoxGeometry(), material));\n    return (_frame: ICtx, dt: number) => {\n      cube.rotation.y += dt;\n    };\n  }\n}\n\nexport default defineGame({ scenes: { play: Play }, start: \"play\" });\n"
	},
	{
		tab: "react",
		label: "React",
		language: "tsx",
		path: "site/src/content/snippets/hero-react.tsx",
		source: "import { GameCanvas, UiLayer, useUiIntent, useUiState } from \"@threenative/ui\";\nimport game from \"./hero-typescript.js\";\n\nfunction Hud() {\n  const score = useUiState<{ score: number }, number>((state) => state.score);\n  const send = useUiIntent();\n  return (\n    <button data-tn-interactive onClick={() => send(\"restart\")} type=\"button\">\n      {score ?? 0}\n    </button>\n  );\n}\n\nexport function App() {\n  return (\n    <>\n      <GameCanvas game={game} />\n      <UiLayer>\n        <Hud />\n      </UiLayer>\n    </>\n  );\n}\n"
	},
	{
		tab: "cli",
		label: "CLI",
		language: "bash",
		path: "site/src/content/snippets/hero-cli.sh",
		source: "pnpm create threenative my-game\ncd my-game\npnpm install\npnpm dev\n"
	}
];
function snippet(tab) {
	const found = snippets.find((item) => item.tab === tab);
	if (found === void 0) throw new Error(`TN_SITE_UNKNOWN_SNIPPET: no snippet for ${tab}.`);
	return found;
}
/** How each package manager spells "run a script from package.json". */
var RUN_PREFIX = {
	bun: "bun run",
	npm: "npm run",
	pnpm: "pnpm",
	yarn: "yarn"
};
/** The install command, verbatim from `hero-cli.sh`, rewritten for the chosen package manager. */
function installCommand(manager) {
	const source = snippet("cli").source.trimEnd();
	if (manager === "pnpm") return source;
	return source.replace(/^pnpm create /mu, `${manager} create `).replace(/^pnpm install$/mu, `${manager} install`).replace(/^pnpm (\w+)$/gmu, (_line, script) => `${RUN_PREFIX[manager]} ${script}`);
}
//#endregion
//#region src/components/code/CodeBlock.tsx
var KEYWORDS = /* @__PURE__ */ new Set([
	"await",
	"class",
	"const",
	"default",
	"export",
	"extends",
	"from",
	"function",
	"import",
	"interface",
	"let",
	"new",
	"override",
	"readonly",
	"return",
	"static",
	"type"
]);
/**
* A deliberately small tokenizer instead of a highlighter dependency: the panel shows three known
* files, and shipping a 200 kB grammar bundle to colour eighteen lines is the kind of trade the
* repository's own kill-switch rule exists to stop.
*/
function tokenize(line) {
	const tokens = [];
	const pattern = /(\/\/.*$|#.*$)|("[^"]*"|'[^']*'|`[^`]*`)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)/gu;
	let index = 0;
	for (const match of line.matchAll(pattern)) {
		const start = match.index ?? 0;
		if (start > index) tokens.push({
			kind: "plain",
			text: line.slice(index, start)
		});
		const [text, comment, quoted, numeric, word] = match;
		if (comment !== void 0) tokens.push({
			kind: "comment",
			text
		});
		else if (quoted !== void 0) tokens.push({
			kind: "string",
			text
		});
		else if (numeric !== void 0) tokens.push({
			kind: "number",
			text
		});
		else if (word !== void 0) tokens.push({
			kind: KEYWORDS.has(word) ? "keyword" : "plain",
			text
		});
		index = start + text.length;
	}
	if (index < line.length) tokens.push({
		kind: "plain",
		text: line.slice(index)
	});
	return tokens;
}
var TOKEN_CLASS = {
	comment: "text-tn-fg-subtle/70 italic",
	keyword: "text-[#c792ea]",
	number: "text-[#f78c6c]",
	plain: "text-[#c8ced6]",
	string: "text-[#c3e88d]"
};
function CodeBlock({ language, source }) {
	const lines = source.replace(/\n+$/u, "").split("\n");
	return /* @__PURE__ */ jsx("pre", {
		className: "overflow-x-auto px-5 py-4 font-mono text-[13.5px] leading-[1.62]",
		"data-language": language,
		children: /* @__PURE__ */ jsx("code", { children: lines.map((line, lineIndex) => /* @__PURE__ */ jsxs("span", {
			className: "grid grid-cols-[2.25rem_1fr]",
			children: [/* @__PURE__ */ jsx("span", {
				"aria-hidden": "true",
				className: "select-none text-right text-tn-fg-subtle/45",
				children: lineIndex + 1
			}), /* @__PURE__ */ jsx("span", {
				className: "pl-4",
				children: tokenize(line).map((token, tokenIndex) => /* @__PURE__ */ jsx("span", {
					className: TOKEN_CLASS[token.kind],
					children: token.text
				}, tokenIndex))
			})]
		}, lineIndex)) })
	});
}
//#endregion
//#region src/components/code/CodeTabs.tsx
/** The tab strip from the reference: an accent underline on the active tab, copy button right. */
function CodeTabs() {
	const codeTab = useUiStore((state) => state.codeTab);
	const setCodeTab = useUiStore((state) => state.setCodeTab);
	const active = snippets.find((item) => item.tab === codeTab) ?? snippets[0];
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center border-b border-tn-border bg-tn-surface-2 pr-2",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex",
			role: "tablist",
			children: snippets.map((item) => {
				const selected = item.tab === codeTab;
				return /* @__PURE__ */ jsx("button", {
					"aria-selected": selected,
					className: `border-b-2 px-6 py-3 text-[14px] transition-colors ${selected ? "border-tn-accent text-tn-accent" : "border-transparent text-tn-fg-muted hover:text-tn-fg"}`,
					"data-testid": `code-tab-${item.tab}`,
					onClick: () => setCodeTab(item.tab),
					role: "tab",
					type: "button",
					children: item.label
				}, item.tab);
			})
		}), active === void 0 ? null : /* @__PURE__ */ jsx(CopyButton, {
			className: "ml-auto",
			label: `the ${active.label} sample`,
			text: active.source
		})]
	});
}
//#endregion
//#region src/components/ui/Card.tsx
/** The panel shape shared by the code showcase and the card beside it. */
function Card({ children, className }) {
	return /* @__PURE__ */ jsx("div", {
		className: ["overflow-hidden rounded-xl border border-tn-border bg-tn-surface", className].filter(Boolean).join(" "),
		children
	});
}
var byId = new Map([
	{
		id: "hero-headline",
		text: "Build native 3D apps with the Three.js API",
		evidence: {
			kind: "capability",
			symbol: "defineGame"
		}
	},
	{
		id: "hero-subhead",
		text: "ThreeNative lets you write familiar Three.js code and ship high-performance experiences across web, desktop, and mobile — without WebView overhead.",
		evidence: {
			kind: "doc",
			path: "docs/architecture/NATIVE-RENDER-TRANSPORT.md"
		}
	},
	{
		id: "chip-cross-platform",
		text: "Cross-platform runtime",
		evidence: {
			kind: "doc",
			path: "packages/runtime-native/conformance/registry.json"
		}
	},
	{
		id: "chip-webgpu-first",
		text: "WebGPU-first",
		evidence: {
			kind: "capability",
			symbol: "GPUReadback"
		}
	},
	{
		id: "chip-open-source",
		text: "Open source friendly",
		evidence: {
			kind: "doc",
			path: "LICENSE"
		}
	},
	{
		id: "feature-native-performance",
		text: "Skip WebView overhead and push more real-time graphics.",
		evidence: {
			kind: "doc",
			path: "docs/architecture/NATIVE-RUNTIME.md"
		}
	},
	{
		id: "feature-threejs-api",
		text: "Keep the workflow you know instead of learning a new engine.",
		evidence: {
			kind: "capability",
			symbol: "defineGame"
		}
	},
	{
		id: "feature-open-extensible",
		text: "Integrate your own tools, pipelines, and native modules.",
		evidence: {
			kind: "capability",
			symbol: "compileAssets"
		}
	},
	{
		id: "feature-ship-everywhere",
		text: "Target web, desktop, Android, and iOS from a shared codebase.",
		evidence: {
			kind: "doc",
			path: "packages/runtime-native/conformance/registry.json"
		}
	},
	{
		id: "showcase-body",
		text: "The same source runs in the browser on WebGPU and on an owned C++ runtime for desktop, Android and iOS. Every platform claim on this page is a scenario something already ran.",
		evidence: {
			kind: "doc",
			path: "packages/playtest/AGENTS.md"
		}
	}
].map((claim) => [claim.id, claim]));
/** Read a claim by id. Throws rather than rendering an empty string for an unknown id. */
function claim(id) {
	const found = byId.get(id);
	if (found === void 0) throw new Error(`TN_SITE_UNKNOWN_CLAIM: ${id} is not in claims.ts.`);
	return found;
}
function claimText(id) {
	return claim(id).text;
}
//#endregion
//#region src/components/sections/HeroArt.tsx
/**
* Original artwork, drawn rather than photographed: a planet limb and its atmospheric rim, built
* from SVG gradients plus a deterministic star lattice. The comp in `REFERENCE.png` is a mock, not
* a licence, so nothing photoreal ships here. Provenance is in `public/og/CREDITS.md`.
*
* It is `aria-hidden`, carries no animation and no raster asset, and is sized entirely by its
* container, so it can neither shift layout nor move under `prefers-reduced-motion`.
*/
var STARS = Array.from({ length: 90 }, (_unused, index) => {
	const phi = index * .6180339887 % 1;
	return {
		cx: Number((phi * 100).toFixed(2)),
		cy: Number(index * 29 % 71 / 71 * 82 + 1),
		o: Number((.16 + index % 5 / 4 * .62).toFixed(2)),
		r: index % 9 === 0 ? .17 : .09
	};
});
function HeroArt({ className }) {
	return /* @__PURE__ */ jsxs("svg", {
		"aria-hidden": "true",
		className: ["pointer-events-none block", className].filter(Boolean).join(" "),
		focusable: "false",
		preserveAspectRatio: "xMidYMid slice",
		viewBox: "0 0 100 68",
		children: [
			/* @__PURE__ */ jsxs("defs", { children: [
				/* @__PURE__ */ jsxs("radialGradient", {
					cx: "62%",
					cy: "14%",
					id: "tn-space",
					r: "78%",
					children: [
						/* @__PURE__ */ jsx("stop", {
							offset: "0%",
							stopColor: "#0f1730",
							stopOpacity: "0.85"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "60%",
							stopColor: "#050a16",
							stopOpacity: "0.55"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "100%",
							stopColor: "#020407",
							stopOpacity: "0"
						})
					]
				}),
				/* @__PURE__ */ jsxs("radialGradient", {
					cx: "30%",
					cy: "12%",
					id: "tn-planet",
					r: "76%",
					children: [
						/* @__PURE__ */ jsx("stop", {
							offset: "0%",
							stopColor: "#1d2740"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "32%",
							stopColor: "#111827"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "66%",
							stopColor: "#070b13"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "100%",
							stopColor: "#04060a"
						})
					]
				}),
				/* @__PURE__ */ jsxs("linearGradient", {
					id: "tn-terminator",
					x1: "10%",
					x2: "78%",
					y1: "0%",
					y2: "70%",
					children: [
						/* @__PURE__ */ jsx("stop", {
							offset: "0%",
							stopColor: "#ffcb92",
							stopOpacity: "0.62"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "14%",
							stopColor: "#d4813f",
							stopOpacity: "0.34"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "38%",
							stopColor: "#3b2b34",
							stopOpacity: "0.14"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "70%",
							stopColor: "#04060c",
							stopOpacity: "0"
						})
					]
				}),
				/* @__PURE__ */ jsxs("radialGradient", {
					cx: "50%",
					cy: "50%",
					id: "tn-halo",
					r: "50%",
					children: [
						/* @__PURE__ */ jsx("stop", {
							offset: "86%",
							stopColor: "#ffb974",
							stopOpacity: "0"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "96%",
							stopColor: "#ffcb96",
							stopOpacity: "0.3"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "100%",
							stopColor: "#8fb4ff",
							stopOpacity: "0"
						})
					]
				}),
				/* @__PURE__ */ jsxs("linearGradient", {
					id: "tn-left",
					x1: "0%",
					x2: "46%",
					y1: "0",
					y2: "0",
					children: [/* @__PURE__ */ jsx("stop", {
						offset: "0%",
						stopColor: "#020407",
						stopOpacity: "1"
					}), /* @__PURE__ */ jsx("stop", {
						offset: "100%",
						stopColor: "#020407",
						stopOpacity: "0"
					})]
				}),
				/* @__PURE__ */ jsxs("linearGradient", {
					id: "tn-fade",
					x1: "0",
					x2: "0",
					y1: "62%",
					y2: "100%",
					children: [/* @__PURE__ */ jsx("stop", {
						offset: "0%",
						stopColor: "#020407",
						stopOpacity: "0"
					}), /* @__PURE__ */ jsx("stop", {
						offset: "100%",
						stopColor: "#020407",
						stopOpacity: "0.92"
					})]
				})
			] }),
			/* @__PURE__ */ jsx("rect", {
				fill: "#020407",
				height: "68",
				width: "100",
				x: "0",
				y: "0"
			}),
			/* @__PURE__ */ jsx("rect", {
				fill: "url(#tn-space)",
				height: "68",
				width: "100",
				x: "0",
				y: "0"
			}),
			STARS.map((star) => /* @__PURE__ */ jsx("circle", {
				cx: star.cx,
				cy: star.cy,
				fill: "#ffffff",
				fillOpacity: star.o,
				r: star.r
			}, `${star.cx}-${star.cy}`)),
			/* @__PURE__ */ jsx("circle", {
				cx: "76",
				cy: "118",
				fill: "url(#tn-halo)",
				r: "80"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "76",
				cy: "118",
				fill: "url(#tn-planet)",
				r: "74"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "76",
				cy: "118",
				fill: "url(#tn-terminator)",
				r: "74"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "76",
				cy: "118",
				fill: "none",
				r: "74",
				stroke: "#ffd7a6",
				strokeOpacity: "0.55",
				strokeWidth: "0.35"
			}),
			/* @__PURE__ */ jsx("rect", {
				fill: "url(#tn-fade)",
				height: "68",
				width: "100",
				x: "0",
				y: "0"
			}),
			/* @__PURE__ */ jsx("rect", {
				fill: "url(#tn-left)",
				height: "68",
				width: "100",
				x: "0",
				y: "0"
			})
		]
	});
}
//#endregion
//#region src/components/sections/ShowcaseCard.tsx
var RUNTIME_DOC = "https://github.com/ThreeNativeHQ/threenative/blob/main/docs/architecture/NATIVE-RUNTIME.md";
/**
* The reference puts a play button over a video still here. There is no recording to link, and a
* play button over a still that plays nothing is a lie in a screenshot's clothing — so the card
* ships with drawn art, no play affordance, and a link to something that exists. It gains the
* player the day a real recording does.
*/
function ShowcaseCard() {
	return /* @__PURE__ */ jsxs(Card, {
		className: "grid grid-cols-1 md:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)]",
		children: [/* @__PURE__ */ jsx("div", {
			className: "relative min-h-[200px] overflow-hidden border-b border-tn-border md:min-h-full md:border-b-0 md:border-r",
			children: /* @__PURE__ */ jsx(HeroArt, { className: "absolute inset-0 h-full w-full" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col justify-center gap-5 p-7 lg:p-9",
			children: [
				/* @__PURE__ */ jsxs("h2", {
					className: "text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] lg:text-[34px]",
					children: [
						"Built for",
						/* @__PURE__ */ jsx("br", {}),
						"modern 3D teams"
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "max-w-[380px] text-[15px] leading-relaxed text-tn-fg-muted",
					children: claimText("showcase-body")
				}),
				/* @__PURE__ */ jsxs("a", {
					className: "inline-flex items-center gap-2 text-[14px] font-medium text-tn-accent transition-opacity hover:opacity-80",
					href: RUNTIME_DOC,
					rel: "noreferrer",
					target: "_blank",
					children: ["How the runtime works", /* @__PURE__ */ jsx(Icon, {
						className: "h-4 w-4",
						name: "arrowRight"
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/sections/CodeShowcase.tsx
var BROWSE_API = "https://github.com/ThreeNativeHQ/threenative/blob/main/packages/create-threenative/capabilities.json";
/** The tabbed panel and the card beside it — the lower band of `REFERENCE.png`. */
function CodeShowcase() {
	const active = snippet(useUiStore((state) => state.codeTab));
	return /* @__PURE__ */ jsx("section", {
		className: "mx-auto w-full max-w-[1536px] px-5 pb-16 pt-8 lg:px-[68px] lg:pb-20 lg:pt-5",
		id: "code",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-6 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)]",
			children: [/* @__PURE__ */ jsxs(Card, {
				className: "flex flex-col",
				children: [
					/* @__PURE__ */ jsx(CodeTabs, {}),
					/* @__PURE__ */ jsx("div", {
						className: "min-h-[268px] flex-1",
						children: /* @__PURE__ */ jsx(CodeBlock, {
							language: active.language,
							source: active.source
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "border-t border-tn-border px-5 py-4",
						children: /* @__PURE__ */ jsxs("a", {
							className: "inline-flex items-center gap-2 text-[14px] font-medium text-tn-accent transition-opacity hover:opacity-80",
							href: BROWSE_API,
							rel: "noreferrer",
							target: "_blank",
							children: ["Browse API", /* @__PURE__ */ jsx(Icon, {
								className: "h-4 w-4",
								name: "arrowRight"
							})]
						})
					})
				]
			}), /* @__PURE__ */ jsx(ShowcaseCard, {})]
		})
	});
}
//#endregion
//#region src/content/features.ts
/** The four-column band from the reference, in the reference's order. */
var features = [
	{
		icon: "bolt",
		title: "Native performance",
		claimId: "feature-native-performance"
	},
	{
		icon: "hexagon",
		title: "Three.js API",
		claimId: "feature-threejs-api"
	},
	{
		icon: "puzzle",
		title: "Open & extensible",
		claimId: "feature-open-extensible"
	},
	{
		icon: "devices",
		title: "Ship everywhere",
		claimId: "feature-ship-everywhere"
	}
];
//#endregion
//#region src/components/sections/FeatureRow.tsx
/** The four-column band under the hero, with the reference's hairline dividers. */
function FeatureRow() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-y border-tn-border",
		id: "features",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto grid w-full max-w-[1536px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
			children: features.map((feature, index) => /* @__PURE__ */ jsxs("div", {
				className: `flex gap-4 px-5 py-7 lg:py-[26px] ${index === 0 ? "lg:pl-[68px] lg:pr-8" : "border-tn-border px-5 sm:odd:border-l lg:border-l lg:px-11"} ${index < 2 ? "" : "border-t border-tn-border sm:border-t lg:border-t-0"}`,
				children: [/* @__PURE__ */ jsx(Icon, {
					className: "mt-0.5 h-7 w-7 shrink-0 text-tn-accent",
					name: feature.icon
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-[15px] font-semibold text-tn-fg",
					children: feature.title
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-1.5 max-w-[248px] text-[13.5px] leading-[1.55] text-tn-fg-muted",
					children: claimText(feature.claimId)
				})] })]
			}, feature.claimId))
		})
	});
}
//#endregion
//#region src/components/ui/Chip.tsx
/** One item of the hero's dotted row. The separator is drawn by the row, not by the chip. */
function Chip({ children }) {
	return /* @__PURE__ */ jsx("li", {
		className: "text-[14px] text-tn-fg-muted",
		children
	});
}
function ChipRow({ children }) {
	return /* @__PURE__ */ jsx("ul", {
		className: "flex flex-wrap items-center gap-x-3 gap-y-2 [&>li+li]:before:mr-3 [&>li+li]:before:text-tn-fg-subtle [&>li+li]:before:content-['•']",
		children
	});
}
//#endregion
//#region src/components/sections/Hero.tsx
var CHIP_CLAIMS = [
	"chip-cross-platform",
	"chip-webgpu-first",
	"chip-open-source"
];
function InstallPanel() {
	const manager = useUiStore((state) => state.packageManager);
	const setManager = useUiStore((state) => state.setPackageManager);
	const command = installCommand(manager);
	return /* @__PURE__ */ jsxs("div", {
		className: "mt-5 max-w-[520px] overflow-hidden rounded-xl border border-tn-border bg-tn-surface",
		"data-testid": "install-panel",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center border-b border-tn-border bg-tn-surface-2 pr-1.5",
			children: [packageManagers.map((item) => /* @__PURE__ */ jsx("button", {
				"aria-pressed": item === manager,
				className: `border-b-2 px-4 py-2 text-[13px] transition-colors ${item === manager ? "border-tn-accent text-tn-accent" : "border-transparent text-tn-fg-muted hover:text-tn-fg"}`,
				"data-testid": `package-manager-${item}`,
				onClick: () => setManager(item),
				type: "button",
				children: item
			}, item)), /* @__PURE__ */ jsx(CopyButton, {
				className: "ml-auto",
				label: "the install command",
				text: command
			})]
		}), /* @__PURE__ */ jsx("pre", {
			className: "overflow-x-auto px-5 py-4 font-mono text-[13.5px] leading-[1.7] text-[#c8ced6]",
			"data-testid": "install-command",
			children: command
		})]
	});
}
/** Headline, subhead, CTA pair, install reveal, chips, art. */
function Hero() {
	const [showInstall, setShowInstall] = useState(false);
	return /* @__PURE__ */ jsxs("section", {
		className: "relative isolate overflow-hidden",
		id: "install",
		children: [
			/* @__PURE__ */ jsx(HeroArt, { className: "absolute inset-y-0 right-0 hidden h-full w-[58%] lg:block" }),
			/* @__PURE__ */ jsx("div", {
				className: "relative mx-auto w-full max-w-[1536px] px-5 pb-14 pt-12 lg:px-[68px] lg:pb-10 lg:pt-[62px]",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-[620px]",
					children: [
						/* @__PURE__ */ jsx("h1", {
							className: "tn-rise max-w-[600px] text-[38px] font-bold leading-[1.08] tracking-[-0.028em] text-tn-fg sm:text-[46px] lg:text-[54px]",
							children: claimText("hero-headline")
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 max-w-[470px] text-[16px] leading-[1.62] text-tn-fg-muted lg:text-[17px]",
							children: claimText("hero-subhead")
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ jsxs(Button, {
								"aria-expanded": showInstall,
								"data-testid": "install-cta",
								onClick: () => setShowInstall((open) => !open),
								variant: "accent",
								children: [/* @__PURE__ */ jsx(Icon, {
									className: "h-[18px] w-[18px]",
									name: "terminal",
									strokeWidth: 2
								}), "Install via CLI"]
							}), /* @__PURE__ */ jsx(ButtonLink, {
								href: "#features",
								variant: "outline",
								children: "Explore Features"
							})]
						}),
						showInstall ? /* @__PURE__ */ jsx(InstallPanel, {}) : null,
						/* @__PURE__ */ jsx("noscript", { children: /* @__PURE__ */ jsx("pre", {
							className: "mt-5 max-w-[520px] overflow-x-auto rounded-xl border border-tn-border bg-tn-surface px-5 py-4 font-mono text-[13.5px] leading-[1.7] text-[#c8ced6]",
							"data-testid": "install-command-noscript",
							children: installCommand("pnpm")
						}) }),
						/* @__PURE__ */ jsx("div", {
							className: "mt-8",
							children: /* @__PURE__ */ jsx(ChipRow, { children: CHIP_CLAIMS.map((id) => /* @__PURE__ */ jsx(Chip, { children: claimText(id) }, id)) })
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(HeroArt, { className: "h-[240px] w-full lg:hidden" })
		]
	});
}
//#endregion
//#region src/content/logos.ts
var logos = [];
//#endregion
//#region src/components/sections/LogoWall.tsx
/**
* Renders nothing until an organisation has given written permission, recorded on its entry.
* Inventing customer logos is not a placeholder; it is a false statement about real companies.
*/
function LogoWall() {
	if (logos.length === 0) return null;
	return /* @__PURE__ */ jsx("section", {
		className: "border-t border-tn-border py-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-[1536px] px-5 lg:px-[68px]",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "text-center text-[13px] font-medium uppercase tracking-[0.22em] text-tn-fg-subtle",
				children: "Trusted by innovative teams"
			}), /* @__PURE__ */ jsx("ul", {
				className: "mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8",
				children: logos.map((logo) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("img", {
					alt: logo.name,
					className: "h-7 w-auto opacity-70",
					src: logo.mark
				}) }, logo.name))
			})]
		})
	});
}
//#endregion
//#region src/app.tsx
var CODE_TABS = [
	"typescript",
	"react",
	"cli"
];
function isCodeTab(value) {
	return value !== null && CODE_TABS.some((tab) => tab === value);
}
function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsx(FeatureRow, {}),
		/* @__PURE__ */ jsx(CodeShowcase, {}),
		/* @__PURE__ */ jsx(LogoWall, {})
	] });
}
function NotFound() {
	return /* @__PURE__ */ jsxs("section", {
		className: "mx-auto w-full max-w-[1536px] px-5 py-28 lg:px-[68px]",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "text-[14px] font-medium uppercase tracking-[0.2em] text-tn-accent",
				children: "404"
			}),
			/* @__PURE__ */ jsx("h1", {
				className: "mt-4 text-[38px] font-bold leading-[1.1] tracking-[-0.02em] lg:text-[46px]",
				children: "Page not found"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-5 max-w-[440px] text-[16px] leading-relaxed text-tn-fg-muted",
				children: "The page you asked for is not part of this site."
			}),
			/* @__PURE__ */ jsx("a", {
				className: "mt-8 inline-flex text-[15px] font-medium text-tn-accent hover:opacity-80",
				href: "/",
				children: "Back to the home page"
			})
		]
	});
}
/** Deep links select the code tab: `/?tab=react` lands on the React sample. */
function useTabDeepLink() {
	const setCodeTab = useUiStore((state) => state.setCodeTab);
	useEffect(() => {
		const tab = new URLSearchParams(window.location.search).get("tab");
		if (isCodeTab(tab)) setCodeTab(tab);
	}, [setCodeTab]);
}
function App({ route }) {
	useTabDeepLink();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-screen flex-col bg-tn-bg",
		children: [
			/* @__PURE__ */ jsx(SiteHeader, {}),
			/* @__PURE__ */ jsx(MobileNav, {}),
			/* @__PURE__ */ jsx("main", {
				className: "flex-1",
				children: route.path === "/" ? /* @__PURE__ */ jsx(Home, {}) : /* @__PURE__ */ jsx(NotFound, {})
			}),
			/* @__PURE__ */ jsx(SiteFooter, {}),
			/* @__PURE__ */ jsx(CopyToast, {})
		]
	});
}
//#endregion
//#region src/lib/seo.ts
var SITE_ORIGIN = "https://threenative.dev";
function escapeAttribute(value) {
	return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;");
}
function canonicalUrl(route) {
	return route.path === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${route.path}`;
}
/** The `<head>` for one route, injected by `scripts/prerender.ts` into `index.html`. */
function headTags(route) {
	const url = canonicalUrl(route);
	return [
		`<title>${escapeAttribute(route.title)}</title>`,
		`<meta name="description" content="${escapeAttribute(route.description)}" />`,
		`<link rel="canonical" href="${url}" />`,
		route.indexable ? `<meta name="robots" content="index, follow" />` : `<meta name="robots" content="noindex, follow" />`,
		`<meta property="og:type" content="website" />`,
		`<meta property="og:site_name" content="ThreeNative" />`,
		`<meta property="og:title" content="${escapeAttribute(route.title)}" />`,
		`<meta property="og:description" content="${escapeAttribute(route.description)}" />`,
		`<meta property="og:url" content="${url}" />`,
		`<meta property="og:image" content="${SITE_ORIGIN}${route.ogImage}" />`,
		`<meta name="twitter:card" content="summary_large_image" />`,
		`<meta name="twitter:title" content="${escapeAttribute(route.title)}" />`,
		`<meta name="twitter:description" content="${escapeAttribute(route.description)}" />`,
		`<meta name="twitter:image" content="${SITE_ORIGIN}${route.ogImage}" />`,
		`<meta name="theme-color" content="#020407" />`
	].join("\n    ");
}
//#endregion
//#region src/entry-server.tsx
/** Called by `scripts/prerender.ts` once per route. Throws rather than emitting an empty body. */
function render(path) {
	const route = routes.find((candidate) => candidate.path === path);
	if (route === void 0) throw new Error(`TN_SITE_PRERENDER_NO_ROUTE: ${path}`);
	const html = renderToString(/* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(App, { route }) }));
	return {
		head: headTags(route),
		html,
		route
	};
}
//#endregion
export { render, routes };
