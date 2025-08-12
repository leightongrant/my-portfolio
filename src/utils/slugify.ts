export default function slugify(title) {
  return title.toLowerCase().replaceAll(' ', '-')
}
