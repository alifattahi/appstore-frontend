// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kE2m6SaQqQewvhrZdkGhrf
// Component: 99T2ETSydRuz

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: SeN-_u-Bb4MZ/component
import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import { RichLayout } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-layout";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: kE2m6SaQqQewvhrZdkGhrf/projectcss
import sty from "./PlasmicAppStoreCatalogue.module.css"; // plasmic-import: 99T2ETSydRuz/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: qoRXrD2yswrp/icon
import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: LwBmQ7p7bmsl/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: Uv6mWKVW5aWf/icon

createPlasmicElementProxy;

export type PlasmicAppStoreCatalogue__VariantMembers = {};
export type PlasmicAppStoreCatalogue__VariantsArgs = {};
type VariantPropType = keyof PlasmicAppStoreCatalogue__VariantsArgs;
export const PlasmicAppStoreCatalogue__VariantProps =
  new Array<VariantPropType>();

export type PlasmicAppStoreCatalogue__ArgsType = {};
type ArgPropType = keyof PlasmicAppStoreCatalogue__ArgsType;
export const PlasmicAppStoreCatalogue__ArgProps = new Array<ArgPropType>();

export type PlasmicAppStoreCatalogue__OverridesType = {
  root?: Flex__<"div">;
  svg?: Flex__<"svg">;
  text?: Flex__<"div">;
  button?: Flex__<typeof Button>;
  navigationBar?: Flex__<typeof NavigationBar>;
  richAppLayout?: Flex__<typeof RichLayout>;
};

export interface DefaultAppStoreCatalogueProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAppStoreCatalogue__RenderFunc(props: {
  variants: PlasmicAppStoreCatalogue__VariantsArgs;
  args: PlasmicAppStoreCatalogue__ArgsType;
  overrides: PlasmicAppStoreCatalogue__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicAppStoreCatalogue.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicAppStoreCatalogue.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicAppStoreCatalogue.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
          dir={"rtl"}
        >
          <div className={classNames(projectcss.all, sty.freeBox__qpRes)}>
            <div className={classNames(projectcss.all, sty.freeBox__oIw)}>
              <IconIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />

              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"n8n"}
              </div>
              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button)}
                link={`/deploy/${"n8n"}/[required_license]`}
              >
                {"\u0646\u0635\u0628"}
              </Button>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__ujCr6)} />
          </div>
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            brand={
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__ll2Hm
                )}
                component={Link}
                href={"#"}
                platform={"nextjs"}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__m6U)}
                  displayHeight={"40px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  src={"https://static1.plasmic.app/nav-logo-placeholder.svg"}
                />
              </PlasmicLink__>
            }
            className={classNames("__wab_instance", sty.navigationBar)}
            closeButton={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__aQke)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/close.svg"}
              />
            }
            itemsGap={8}
            menuItems={
              <React.Fragment>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__vIql2
                  )}
                  component={Link}
                  href={"/"}
                  platform={"nextjs"}
                >
                  {"Home"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__qh0S0
                  )}
                  component={Link}
                  href={"/"}
                  platform={"nextjs"}
                >
                  {"About"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__xmrw
                  )}
                  component={Link}
                  href={"/"}
                  platform={"nextjs"}
                >
                  {"Contact"}
                </PlasmicLink__>
              </React.Fragment>
            }
            openButton={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__nkm7A)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/menu.svg"}
              />
            }
            responsiveBreakpoint={768}
          />

          <RichLayout
            data-plasmic-name={"richAppLayout"}
            data-plasmic-override={overrides.richAppLayout}
            className={classNames("__wab_instance", sty.richAppLayout)}
            logoElement={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___5GgOd)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/fake-logo.svg"}
              />
            }
            navMenuItems={[{ path: "/", name: "Home" }]}
            title={"App title"}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "text", "button", "navigationBar", "richAppLayout"],
  svg: ["svg"],
  text: ["text"],
  button: ["button"],
  navigationBar: ["navigationBar"],
  richAppLayout: ["richAppLayout"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
  text: "div";
  button: typeof Button;
  navigationBar: typeof NavigationBar;
  richAppLayout: typeof RichLayout;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAppStoreCatalogue__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAppStoreCatalogue__VariantsArgs;
    args?: PlasmicAppStoreCatalogue__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAppStoreCatalogue__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAppStoreCatalogue__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAppStoreCatalogue__ArgProps,
          internalVariantPropNames: PlasmicAppStoreCatalogue__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAppStoreCatalogue__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAppStoreCatalogue";
  } else {
    func.displayName = `PlasmicAppStoreCatalogue.${nodeName}`;
  }
  return func;
}

export const PlasmicAppStoreCatalogue = Object.assign(
  // Top-level PlasmicAppStoreCatalogue renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),
    button: makeNodeComponent("button"),
    navigationBar: makeNodeComponent("navigationBar"),
    richAppLayout: makeNodeComponent("richAppLayout"),

    // Metadata about props expected for PlasmicAppStoreCatalogue
    internalVariantProps: PlasmicAppStoreCatalogue__VariantProps,
    internalArgProps: PlasmicAppStoreCatalogue__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "App Store",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAppStoreCatalogue;
/* prettier-ignore-end */
