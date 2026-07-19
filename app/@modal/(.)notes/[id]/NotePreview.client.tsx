'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import Modal from '@/components/Modal/Modal';

export default function NotePreviewClient() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const close = () => router.back();

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading)
    return (
      <Modal onClose={close}>
        <p>Loading, please wait...</p>
      </Modal>
    );

  if (isError || !note)
    return (
      <Modal onClose={close}>
        <p>Something went wrong.</p>
      </Modal>
    );

  return (
    <Modal onClose={close}>
      {/* сюди — твоя розмітка картки з app/notes/[id]/NoteDetails.client.tsx,
          класи з відповідного .module.css */}
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>{note.tag}</p>
    </Modal>
  );
}
