const deleteIcon = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', deleteTaks);
    return i; 
};

const deleteTaks = (event) =>{
    const parent = event.target.parentElement;
    parent.remove();
};

export default deleteIcon;