import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appCpfMask]',
  standalone: true
})
export class CpfMaskDirective {
  @Output() cpfValido = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input) return;

    let value = input.value.replace(/\D/g, '');

    // Aplica a máscara
    if (value.length > 11) value = value.substring(0, 11);

    if (value.length > 9) {
      value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
      value = value.replace(/^(\d{3})(\d{3})(\d{3}).*/, '$1.$2.$3');
    } else if (value.length > 3) {
      value = value.replace(/^(\d{3})(\d{3}).*/, '$1.$2');
    }

    this.setValue(input, value);
    this.validarCPF(value.replace(/\D/g, ''));
  }

  @HostListener('blur', ['$event'])
  onBlur(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input) return;

    const value = input.value.replace(/\D/g, '');
    this.validarCPF(value);
  }

  private setValue(input: HTMLInputElement, value: string): void {
    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;

    input.value = value;
    input.setSelectionRange(start, end);
  }

  private validarCPF(cpf: string): void {
    const valido = this.validarCPFAlgorithm(cpf);
    this.cpfValido.emit(valido);
  }

  private validarCPFAlgorithm(cpf: string): boolean {
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(10))) return false;

    return true;
  }
}