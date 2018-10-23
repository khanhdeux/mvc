(function ($) {
    $.fn.peopleJquery = function (options) {
        var settings = $.extend({
            defaults: ['A', 'B']
        }, options);

        return this.each(function () {
            var $el = $(this);
            var people = settings.defaults;
            var $button = $el.find('button');
            var $input = $el.find('input');
            var $ul = $el.find('ul');

            // bind events
            $button.on('click', addPerson);
            $ul.delegate('i.del', 'click', deletePerson);

            render();

            function render() {
                var data = people;
                $ul.html('');

                for (var i = 0; i < data.length; i++) {
                    $ul.append('<li>' + data[i] + '[<i class="del">X</i>]</li>')
                }
            }

            function addPerson(value) {
                var name = (typeof value === "string") ? value : $input.val();
                people.push(name);
                render();
                $input.val('');
            }

            function deletePerson(event) {
                var i;
                if (typeof event === "number") {
                    i = event;
                } else {
                    var $remove = $(event.target).closest('li');
                    i = $ul.find('li').index($remove);
                }

                people.splice(i, 1);
                render();
            }
        });
    };

    $(function () {
        $("#peopleJquery").peopleJquery({defaults: ['C', 'D']});
    });
}(jQuery));