$("button").click(function() {
    $.ajax("https://bored.api.lewagon.com/api/activity/", {
        success: function(result) {
            $("section").html(`
                <p>activity: ${result.activity}</p>
                <p>type: ${result.type}</p>
                <p>price: ${result.price} $</p>
            `)
            console.log(result)
        },
        error: function(xhr) {
            console.log(xhr.statusText)
        }
    })
})

$('input').on('change', function(){
    let username = $('input').val()

    $.ajax(`https://api.github.com/users/${username}`, {
        success: function(result) {
            console.log(result)
            $("#result").html(`
                <h1>${result.login}</h1>
                <img src="${result.avatar_url}" alt="">
                <p>bio: ${result.bio}</p>
                <a href="${result.html_url}">link profile</a>
            `)
            console.log(result)
        },
        error: function(xhr) {
            console.log(xhr.statusText)
        }
    })
})


