let videos = ['../IMG/bolt.mp4', '../IMG/dog.mp4','../IMG/pets.mp4','../IMG/marrie.mp4'];

function pegarId(id){
    localStorage.setItem("id_video", id)

}

function mostar_video() {
    let id = localStorage.getItem("id_video")
    let videoElement = document.getElementById('video'); // Obtém o elemento de vídeo pelo id 'video'
    
    // Verifica se o elemento de vídeo foi encontrado
    if (videoElement) {
        videoElement.src = id // Define a nova fonte do vídeo
        videoElement.load(); // Carrega o novo vídeo
        videoElement.play(); // Reproduz o vídeo
        console.log(videoElement.src); // Loga a nova fonte no console
    } else {
        console.error("Elemento de vídeo não encontrado.");
    }
}
