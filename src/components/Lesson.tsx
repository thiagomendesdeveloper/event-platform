import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
    title: string;
    slug: string;
    avaliableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps){

    const isLassonAvaliable = isPast(props.avaliableAt);
    const avaliableDateFormated = format(props.avaliableAt, "EEEE' • 'd' de 'MMMM' • 'K'h'mm", {
        locale: ptBR
    })

    return(
        <a href="#">
            <span className="text-gray-300">
                {avaliableDateFormated}
            </span>
            
            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">

                    {isLassonAvaliable ? (
                        <span className="text-sn text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ): (
                        <span className="text-sn text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em Breve
                        </span>
                    )}

                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                        { props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>

                </header>

                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>

            </div>
        </a>
    )
}