import { FormGroup } from "@angular/forms";

export class FormBase {

    invalidarCampo(form: FormGroup, nome: string) {
        let campoInvalido = this.campoInvalido(form, nome);

        return {
            'ng-dirty': campoInvalido,
            'ng-invalid': campoInvalido
        }
    }

    campoInvalido(form: FormGroup, nome: string) {
        return (form.get(nome)?.touched ||
            form.get(nome)?.dirty) &&
            !form.get(nome)?.valid;
    }
}
