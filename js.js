let goal =  $("input")
let goalValue = goal.val()
let goalDiv = $('.goal_section')
let btnAdd = $('#btnAdd')
let listArray = []
let rules = $('.rules')
let oneClick = $('<p>')
let dblClick = $('<p>')

btnAdd.hover(
    function(){
        $(this).css('background-color', '#30A5BF')
    },
    function() {
        $(this).css('background-color', 'white')
    }
)

btnAdd.click(()=> {
    addGoal()
    addRules()
})


function addGoal() {

    let makeParagraph = $('<p>', {
        class: 'goal_p'
    })

    let makeXbutton = $('<p>',{
        class: 'x_button'
    })

            if(goal.val() === ''){
                goal.css('border', '2px solid red')
            }else{
                goal.css('border', 'none')

                makeParagraph.html(goal.val())
                let makeDiv = $('<div>',{
                    class: 'entered_goal'
                })
                makeParagraph.appendTo(makeDiv)
                makeDiv.appendTo(goalDiv)
                goal.val('')
                listArray.push(makeDiv)

                makeXbutton.html('X')
                makeXbutton.appendTo(makeDiv)
            }

    $('.goal_p').click(function() {
        $(this).css('background-color', '#F2BE22')
    })

    $('.goal_p').dblclick(function(){
        $(this).css('background-color', 'green')
    })

    $('.x_button').hover(
        function() {
            $(this).css('background-color', 'red')
        },
        function() {
            $(this).css('background-color', 'white')
        }
    )

    $('.x_button').click(function(){
        $(this).parents('.entered_goal').hide()
    })

}

function addRules() {
    oneClick.html('For In Progress Click')
    oneClick.appendTo(rules)

    dblClick.html('For Complete Double Click')
    dblClick.appendTo(rules)
}


$('#goal_input').on('keypress', function (event) {
    if (event.keyCode === 13) {
        addGoal()
        addRules()
    }
 });



function leng() {
    console.log(goalDiv.length);
}

