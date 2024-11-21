"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    up: (queryInterface) => {
        return queryInterface.sequelize.query(`

        INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('autoCloseMessage', 'Seu atendimento foi encerrado por falta de interação', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('NotViewTicketsQueueUndefined', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('NotViewTicketsChatBot', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('DirectTicketsToWallets', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('botTicketActive', '', '2020-12-12 16:08:45.354', '2022-07-01 21:10:02.076', 1);
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('NotViewAssignedTickets', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('ignoreGroupMsg', 'enabled', '2022-12-16 16:08:45.354' , '2022-12-16 21:10:02.076', 1);
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('rejectCalls', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('callRejectMessage', 'As chamadas de voz e vídeo estão desabilitas para esse WhatsApp, favor enviar uma mensagem de texto.', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('userDisableSignature', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('userContactWallet', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('spyticket', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('universalCounter', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('autoClose', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
	  INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('autoCloseTime', '86400', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
	  INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('userCreation', 'enabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
	  INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('ContactAdmin', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
	  INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('chatbotLane', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
	  INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('maxRetriesBusinessHours', '3', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
	  INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('autoPending', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
	  INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('autoPendingTime', '10', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
	  INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('TicketsLimitOpen', '30', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
	  INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('userReopenTicket', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
	  INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('TicketsLimitClosed', '30', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1);
	  INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('hidetab', 'enabled', '2022-12-16 16:08:45.354' , '2022-12-16 21:10:02.076', 1);
	  INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('hubToken', 'disabled', '2022-12-16 16:08:45.354' , '2022-12-16 21:10:02.076', 1);
        INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('groupnotification', 'enabled', '2022-12-16 16:08:45.354' , '2022-12-16 21:10:02.076', 1);
        INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('ReopenTicket', 'disabled', '2022-12-16 16:08:45.354' , '2022-12-16 21:10:02.076', 1);
        INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId") VALUES('TicketsLimitPending', '30', '2022-12-16 16:08:45.354' , '2022-12-16 21:10:02.076', 1);
      `);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete("Tenants", {});
    }
};
