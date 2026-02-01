import { prisma } from '@documenso/prisma';

import { mapDocumentIdToSecondaryId, mapTemplateIdToSecondaryId } from '../../utils/envelope';

export const incrementDocumentId = async () => {
  const documentIdCounter = await prisma.counter.upsert({
    where: {
      id: 'document',
    },
    update: {
      value: {
        increment: 1,
      },
    },
    create: {
      id: 'document',
      value: 1,
    },
  });

  return {
    documentId: documentIdCounter.value,
    formattedDocumentId: mapDocumentIdToSecondaryId(documentIdCounter.value),
  };
};

export const incrementTemplateId = async () => {
  const templateIdCounter = await prisma.counter.upsert({
    where: {
      id: 'template',
    },
    update: {
      value: {
        increment: 1,
      },
    },
    create: {
      id: 'template',
      value: 1,
    },
  });

  return {
    templateId: templateIdCounter.value,
    formattedTemplateId: mapTemplateIdToSecondaryId(templateIdCounter.value),
  };
};
