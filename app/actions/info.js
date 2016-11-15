export const ON = 'ON';
export function selecionarServicos(data) {
  return {
    type: ON,
    servicos: data
  }
}

export const OFF = 'OFF';
export function servicoIndividual(data) {
  return {
    type: OFF,
    individual: data
  }
}
