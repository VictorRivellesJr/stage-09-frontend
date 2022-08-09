import { Container } from "./styles"

export function Button({ title, icon: Icon, loading = false, ...props }) {
  return (
    <Container type="button" disabled={loading} {...props}>
      {Icon && <Icon size={18} />}
      {title}
    </Container>
  )
}
