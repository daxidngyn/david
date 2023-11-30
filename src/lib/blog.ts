import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

const parseFrontmatter = (fileContent: string) => {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
};

const getMDXFiles = (dir: string) => {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
};

const readMDXFile = (fp: string) => {
  let rawContent = fs.readFileSync(fp, "utf-8");
  return parseFrontmatter(rawContent);
};

const getMDXData = (dir: string) => {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,

      content,
    };
  });
};

export const getBlogPosts = () => {
  return getMDXData(path.join(process.cwd(), "content"));
};
