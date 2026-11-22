export function diskonBelanja(totalBelanja: number, potongan: number = 10): number {
  const nilaiPotongan = totalBelanja * (potongan / 100);
  return Math.round(nilaiPotongan);
};

export function totalDiskon (totalBelanja: number, nilaiPotongan: number): number {
  return totalBelanja - nilaiPotongan;
}