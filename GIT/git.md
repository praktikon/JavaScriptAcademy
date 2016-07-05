>1. Работа с историей изменений. Написать команды:
1. которая выводит сообщения и автора всех коммитов из ветки develop-feature1, которые сделаны за последние 3 часа и которых нет в родительских ветках (develop, master). Сортировка по дате, первые более новые.
2. выводит для каждого коммита из веток master, develop, в сообщении которых есть упоминание заданного номера задачи (допустим задачи 231), его сообщение, автора и дату. Сортировка по дате, первые более новые.

1.1  git log develop-feature1 --pretty=format:"%s - %cn" --not master develop --since="3 hours ago" 
1.2. git log master develop --grep=231 --pretty=format:"%s %cn %cd"

>2. “Избирательное слияние”. 
Дано: После слияния ветки develop-feature1 в develop, вы продолжили работать в ветке develop-feature1, а develop отдали на тестирование, потом исправили ошибку и закоммитили исправление в develop-feature1, сделали push. Через какое-то время тим лид говорит, что это критический фикс, и надо включить его в develop. Вы делаете pull в ветке develop-feature1 и оказывается, что ваш коллега сделал еще 3 коммита после вашего, и они не стабильные, поэтому не должны быть включены в develop. 
Задание: как добавить в develop только ваш коммит, но чтобы 3 коммита после него в develop не попали?

2.  git checkout develop
    git cherry-pick SHA
    
>3. “Исправление ошибок”.
Дано: Вы начали работу над новой фичей и создали от develop дочернюю ветку develop-feature3.
Сделали там несколько коммитов, и синхронизировались с сервером - все ваши изменения теперь в develop-feature3 на сервере. И тут вы вспомнили, что тим лид строго настрого сказал, что сообщение каждого коммита должно быть форматировано определенным образом (см. примечание п.0) и обязательно содержать номер задачи. А вы об этом забыли и теперь на сервере лежит ветка develop-feature1с “плохими” сообщениями. Задание: Предложите вариант, как наиболее просто исправить ситуацию, чтобы тим лид не увидел ваш промах.
    
3.  git rebase -i HEAD~n     (где n - число коммитов для правки) данная команда дает возможность выбрать способ правки коммитов
                             заменяем p(pick) на r(reword)   - тоесть будет производится правка сообщений.
                             после чего получаем возможность исправить сообщение во вновь открывшемся редакторе. 
                             
    git push --force.        добалвем изменения на удаленную ветку.