import React from 'react';
import BrowseCoursesPage from './BrowseCoursesPage';
import { AIModal, useTextSelection } from '@/components/AIHelper';

const BrowseCoursesPageWithAI: React.FC = () => {
  const {
    selectedText,
    showModal,
    selectionPosition,
    handleCloseModal
  } = useTextSelection();

  return (
    <>
      <BrowseCoursesPage />
      {/* AI Helper Modal for course descriptions */}
      {showModal && (
        <AIModal
          selectedText={selectedText}
          position={selectionPosition}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default BrowseCoursesPageWithAI;