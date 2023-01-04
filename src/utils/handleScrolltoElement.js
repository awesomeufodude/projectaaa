export const handleScrolltoElement = (
  ref
) => {
  ref.current.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
};
