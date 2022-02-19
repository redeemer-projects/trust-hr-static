function formApplySubmit(evt) {
    evt.preventDefault();
    let formData = evt.target.serialize();
    console.log(evt.target)
    $.ajax({
        url: "http://localhost:3008/api/v1/apply",
        method: 'post',
        data: formData,
        success: (response) => {
            alert('done')
        }
    })
}