# Atualização do perfil

**RF**

 - O usuário deve poder atualizar seu nome, senha, e-mail;

**RN**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado.
- Para atualizar sua senha, o usuário deve informa a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Recuperação de senha

**RF**

- O usuário dever poder recuperar sua senha informando o seu e-mail;
- O Usuário deve receber um e-mail com instroçoes de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;


# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos em um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador do dia devem ser armazenados em caches;
- As notificações do prestador devem ser armazenadoas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um staus de lida ou não-lida para que o prestador possa ter controle;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listas os dias de um mês com pelo menos um horário disponível de um prestados;
- O usuário deve poder lista horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar uma hora exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviço consigo mesmo;



