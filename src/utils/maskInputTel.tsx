export default function maskTel(tel: string) {
    if(!tel) return "";
    tel = tel.replace(/\D/g,'');
    tel = tel.replace(/(\d{2})(\d)/,"($1) $2");
    tel = tel.replace(/(\d)(\d{4})$/,"$1-$2");
    return tel;
}