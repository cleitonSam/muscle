import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
selector: '[appCpfMask]',
standalone: true
})
export class CpfMaskDirective {
@Output() cpfValido = new EventEmitter<boolean>(); // Emite true/false quando o CPF é válido

constructor(private el: ElementRef) {}

@HostListener('input', ['$event'])
onInput(event: InputEvent) {
const input = event.target as HTMLInputElement;
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

input.value = value;
this.validarCPF(value.replace(/\D/g, '')); // Valida o CPF sem máscara
}

private validarCPF(cpf: string): void {
const valido = this.validarCPFAlgorithm(cpf);
this.cpfValido.emit(valido); // Notifica o componente
}

private validarCPFAlgorithm(cpf: string): boolean {
if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

// Validação do primeiro dígito verificador
let sum = 0;
for (let i = 0; i < 9; i++) {
sum += parseInt(cpf.charAt(i)) * (10 - i);
}
let remainder = (sum * 10) % 11;
if (remainder === 10) remainder = 0;
if (remainder !== parseInt(cpf.charAt(9))) return false;

// Validação do segundo dígito verificador
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