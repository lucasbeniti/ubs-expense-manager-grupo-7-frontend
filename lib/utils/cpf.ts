export const formatCPF = (value: string | number): string => {
  if (!value) return ''

  const cpf = value.toString().replace(/\D/g, '')

  if (cpf.length <= 3) {
    return cpf
  }

  if (cpf.length <= 6) {
    return cpf.replace(/(\d{3})(\d+)/, '$1.$2')
  }

  if (cpf.length <= 9) {
    return cpf.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3')
  }

  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4')
}
