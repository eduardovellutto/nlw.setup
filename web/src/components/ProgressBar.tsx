import clsx from "clsx"

interface ProgressBarProps {
    progress: number
}

export function ProgressBar(props: ProgressBarProps) {
    return (
        <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
            <div 
                role='progressbar'
                aria-label='Progresso de ábitos compeletados nesse dia'
                aria-valuenow={props.progress}
                className={clsx('h-3 rounded-xl bg-violet-600', {
                    'bg-green-500' : props.progress === 100
                })}
                style={{width: `${props.progress}%`}}></div>
        </div>
    )
}