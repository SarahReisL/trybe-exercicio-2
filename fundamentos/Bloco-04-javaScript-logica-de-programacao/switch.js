// é pouco usado. melho o if else.
//sintase parecida com if else.


let tryber = 'Caique'; //pode ser de qualquer tipo pri
switch (tryber) {
    case 'Caique':
        console.log('Pessoa Especialista');
        break;
    case 'Fernanda':
        console.log('Pessoa Instrutora');
        break; 
        default:
        console.log('Essa pessoa não existe');
        break;              
}
// se nao tiver um break: o cod continua a execução até achar um break.