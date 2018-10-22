/*(function () {
    var people = {
        people: ['A', 'B'],
        init: function (id) {
            this.cacheDom(id);
            this.bindEvents();
            this.render();
        },
        cacheDom: function (id) {
            this.$el = $(id);
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('ul');
        },
        bindEvents: function() {
            this.$button.on('click', this.addPerson.bind(this));
            this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
        },
        render: function() {
            var data = this.people;
            this.$ul.html('');

            for(var i=0;i < data.length; i++) {
                this.$ul.append('<li>' + data[i] + '[<i class="del">X</i>]</li>')
            }
        },
        addPerson: function() {
            this.people.push(this.$input.val());
            this.render();
        },
        deletePerson: function(e) {
            var $remove = $(e.target).closest('li');
            var i = this.$ul.find('li').index($remove);

            this.people.splice(i, 1);
            this.render();
        }
    };

    $(function() {
        people.init("#peopleModule");
    });
}());*/

$(function() {
    var people = (function() {
        var people = ['A', 'B'];

        //cache DOM
        var $el = $('#peopleModule');
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

            for(var i=0;i < data.length; i++) {
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

        return {
            addPerson:addPerson,
            deletePerson:deletePerson
        }
    })();

    people.addPerson('ABC');
    people.deletePerson(1);
});