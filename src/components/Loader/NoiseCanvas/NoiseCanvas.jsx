import { useEffect, useRef } from "react"

export default function NoiseCanvas({ width, height }) {
    const canvasRef = useRef(null)
    const ctx = useRef(null)
    const noiseData = useRef([])
    let frame = 0
    let loopTimeout

    const createNoise = () => {
        const idata = ctx.current.createImageData(width, height)
        const buffer32 = new Uint32Array(idata.data.buffer)
        const len = buffer32.length

        for (let i = 0; i < len; i++) {
            buffer32[i] = Math.random() < 0.5 ? 0xff000000 : 0
        }

        noiseData.current.push(idata);
    }

    const paintNoise = () => {
        frame = frame === 9 ? 0 : frame + 1
        ctx.current.putImageData(noiseData.current[frame], 0, 0)
    }

    const loop = () => {
        paintNoise(frame)

        loopTimeout = window.setTimeout(() => {
            window.requestAnimationFrame(loop)
        }, 1000 / 25)
    }

    const setup = () => {
        canvasRef.current = document.getElementById("noise")
        ctx.current = canvasRef.current.getContext("2d")
        canvasRef.current.width = width
        canvasRef.current.height = height

        for (let i = 0; i < 10; i++) {
            createNoise()
        }

        loop()
    }

    useEffect(() => {
        let resizeThrottle
        window.addEventListener("resize", () => {
            window.clearTimeout(resizeThrottle)

            resizeThrottle = window.setTimeout(() => {
                window.clearTimeout(loopTimeout)
                setup()
            }, 200)
        }, false)

        setup()
    }, [width, height])

    return <canvas id="noise" className="noise" width={width} height={height}></canvas>
}