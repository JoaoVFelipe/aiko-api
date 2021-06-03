function Messages() {
    this.OBRIGATORY_NAME = 'Nome é obrigatório!';
    this.OBRIGATORY_MAIL = 'E-mail é obrigatório!';
    this.OBRIGATORY_PASS = 'Senha é obrigatória!';

    this.INVALID_MAIL = 'E-mail inválido!';
    this.INVALID_PASS = 'Senha inválida!';
    this.IN_USE_MAIL = 'E-mail já está em uso!';

    this.USER_NOT_FOUND = 'Usuário não encontrado!'

    this.MIN_CHARS_PASSWORD = 'Senha precisa ter no mínimo 8 caracteres!'
}

module.exports = Messages;
