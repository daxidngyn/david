import Image from "next/image";

import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";

const RoundedImage = (props) => {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
};

const Code = ({ children, ...props }) => {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
};

const components = {
  Image: RoundedImage,
  code: Code,
};

export default function Mdx(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
