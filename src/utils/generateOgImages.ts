import { Resvg } from "@resvg/resvg-js";
import { type CollectionEntry } from "astro:content";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";

function svgToPngBytes(svg: string) {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return new Uint8Array(pngData.asPng());
}

export async function generateOgImageForPost(post: CollectionEntry<"blog">) {
  const svg = await postOgImage(post);
  return svgToPngBytes(svg);
}

export async function generateOgImageForSite() {
  const svg = await siteOgImage();
  return svgToPngBytes(svg);
}
