import { Container } from "./styles"

export function ButtonText({ title, icon: Icon, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {Icon && <Icon size={16} />}
      {title}
    </Container>
  )
}
