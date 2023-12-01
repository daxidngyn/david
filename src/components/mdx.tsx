import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";

const RoundedImage = (props) => {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
};

const Code = ({ children, ...props }) => {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
};

const Link = (props) => {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <NextLink href={href} {...props}>
        {props.children}
      </NextLink>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const components = {
  Image: RoundedImage,
  code: Code,
  a: Link,
};

export default function Mdx(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
